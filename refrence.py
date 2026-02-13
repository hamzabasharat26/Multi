import cv2
import numpy as np
from mvsdk import *
import platform
import os
import time

class ReferenceImageCapturer:
    def __init__(self):
        self.camera = None
        self.camera_obj = None
        self.DevInfo = None
        
        # Image storage
        self.captured_image = None
        self.captured_gray = None
        
        # Garment color setting
        self.garment_color = 'other'  # 'black' or 'other'
        
        # Camera settings
        self.current_format = None
        
    class Camera(object):
        def __init__(self, DevInfo):
            super().__init__()
            self.DevInfo = DevInfo
            self.hCamera = 0
            self.cap = None
            self.pFrameBuffer = 0
            
        def open(self):
            if self.hCamera > 0:
                return True
                
            hCamera = 0
            try:
                hCamera = CameraInit(self.DevInfo, -1, -1)
            except CameraException as e:
                print("CameraInit Failed({}): {}".format(e.error_code, e.message))
                return False
            
            cap = CameraGetCapability(hCamera)
            monoCamera = (cap.sIspCapacity.bMonoSensor != 0)
            
            # Set output format to MONO8 for faster processing
            CameraSetIspOutFormat(hCamera, CAMERA_MEDIA_TYPE_MONO8)
            
            FrameBufferSize = cap.sResolutionRange.iWidthMax * cap.sResolutionRange.iHeightMax * 1
            pFrameBuffer = CameraAlignMalloc(FrameBufferSize, 16)
            
            CameraSetTriggerMode(hCamera, 0)
            CameraPlay(hCamera)
            
            self.hCamera = hCamera
            self.pFrameBuffer = pFrameBuffer
            self.cap = cap
            
            print(f"✅ Camera opened successfully: {self.DevInfo.GetFriendlyName()}")
            print(f"📷 Camera mode: MONOCHROME (for faster processing)")
            return True
        
        def close(self):
            if self.hCamera > 0:
                CameraUnInit(self.hCamera)
                self.hCamera = 0
            if self.pFrameBuffer != 0:
                CameraAlignFree(self.pFrameBuffer)
                self.pFrameBuffer = 0
        
        def grab(self):
            hCamera = self.hCamera
            pFrameBuffer = self.pFrameBuffer
            
            try:
                pRawData, FrameHead = CameraGetImageBuffer(hCamera, 200)
                CameraImageProcess(hCamera, pRawData, pFrameBuffer, FrameHead)
                CameraReleaseImageBuffer(hCamera, pRawData)
                
                if platform.system() == "Windows":
                    CameraFlipFrameBuffer(pFrameBuffer, FrameHead, 1)
                
                frame_data = (c_ubyte * FrameHead.uBytes).from_address(pFrameBuffer)
                frame = np.frombuffer(frame_data, dtype=np.uint8)
                frame = frame.reshape((FrameHead.iHeight, FrameHead.iWidth, 1))
                
                return frame
                
            except CameraException as e:
                if e.error_code != CAMERA_STATUS_TIME_OUT:
                    print("CameraGetImageBuffer failed({}): {}".format(e.error_code, e.message))
                return None

    def initialize_camera(self):
        """Initialize the MindVision camera"""
        try:
            CameraSdkInit(1)
            
            # Enumerate cameras
            camera_list = CameraEnumerateDevice()
            if len(camera_list) == 0:
                print("❌ No camera found!")
                return False
                
            print(f"📸 Found {len(camera_list)} camera(s)")
            self.DevInfo = camera_list[0]
            
            # Create and open camera object
            self.camera_obj = self.Camera(self.DevInfo)
            
            if not self.camera_obj.open():
                print("❌ Failed to open camera")
                return False
                
            print("✅ Camera initialized successfully")
            return True
            
        except CameraException as e:
            print(f"❌ Camera initialization failed: {e}")
            return False

    def ask_garment_color(self):
        """Ask user for garment color and set appropriate gain"""
        print("\n" + "="*60)
        print("🎨 GARMENT COLOR SELECTION")
        print("="*60)
        print("Please select the garment color for optimal image quality:")
        print("B - Black/Dark colored garment (Gain: 150, Auto Exposure: OFF)")
        print("Z - Other colors (Gain: 64, Auto Exposure: ON)")
        print("\nThis will affect image brightness and quality.")
        
        while True:
            choice = input("\nEnter your choice (B/Z): ").strip().upper()
            if choice == 'B':
                self.garment_color = 'black'
                print("✅ Black garment selected - will use gain 150 with Auto Exposure OFF")
                return True
            elif choice == 'Z':
                self.garment_color = 'other'
                print("✅ Other colors selected - will use gain 64 with Auto Exposure ON")
                return True
            else:
                print("❌ Invalid choice! Please press B for Black or Z for Other colors.")

    def set_camera_for_capture(self):
        """Set camera gain and auto exposure based on garment color"""
        if self.camera_obj and self.camera_obj.hCamera > 0:
            if self.garment_color == 'black':
                CameraSetAnalogGain(self.camera_obj.hCamera, 150)
                CameraSetAeState(self.camera_obj.hCamera, 0)  # Auto Exposure OFF for black garments
                print("🎛️ Gain set to 150, Auto Exposure OFF for BLACK garment")
            else:
                CameraSetAnalogGain(self.camera_obj.hCamera, 64)
                CameraSetAeState(self.camera_obj.hCamera, 1)  # Auto Exposure ON for other colors
                print("🎛️ Gain set to 64, Auto Exposure ON for OTHER colors")
            return True
        return False

    def capture_reference_frame(self):
        """Capture a reference frame from camera"""
        print("\n📸 Capturing reference frame...")
        
        # Set camera settings based on garment color
        self.set_camera_for_capture()
        
        # Allow camera to adjust
        time.sleep(0.5)
        
        # Capture frame
        frame = self.camera_obj.grab()
        if frame is not None:
            # Convert to BGR for display/saving
            self.captured_image = cv2.cvtColor(frame, cv2.COLOR_GRAY2BGR)
            self.captured_gray = frame.copy()
            
            print(f"✅ Reference frame captured successfully!")
            print(f"📐 Image dimensions: {self.captured_image.shape[1]}x{self.captured_image.shape[0]}")
            print(f"🎨 Image format: Grayscale (converted to BGR for display)")
            return True
        
        print("❌ Failed to capture reference frame")
        return False

    def save_reference_image(self, filename="reference_image.jpg"):
        """Save reference image to file"""
        try:
            if self.captured_image is not None:
                success = cv2.imwrite(filename, self.captured_image)
                if success:
                    print(f"💾 Reference image saved: {filename}")
                    return True
                else:
                    print("❌ Failed to save reference image")
                    return False
            else:
                print("❌ No reference image to save")
                return False
        except Exception as e:
            print(f"❌ Error saving reference image: {e}")
            return False

    def show_live_preview(self, duration=5):
        """Show live preview for specified duration"""
        print(f"\n🔍 Showing live preview for {duration} seconds...")
        print("Press 'q' to capture now, or wait for auto-capture")
        
        start_time = time.time()
        
        while time.time() - start_time < duration:
            frame = self.camera_obj.grab()
            if frame is not None:
                # Convert to BGR for display
                display_frame = cv2.cvtColor(frame, cv2.COLOR_GRAY2BGR)
                
                # Add status text
                h, w = display_frame.shape[:2]
                cv2.putText(display_frame, f"LIVE PREVIEW - {self.garment_color.upper()} MODE", 
                           (20, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                cv2.putText(display_frame, f"Time: {duration - (time.time() - start_time):.1f}s", 
                           (20, 70), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                cv2.putText(display_frame, "Press 'q' to capture now", 
                           (20, 110), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 0), 2)
                
                cv2.imshow("Reference Image Capture", display_frame)
                
                key = cv2.waitKey(1) & 0xFF
                if key == ord('q'):
                    print("\n⏺️ Manual capture triggered")
                    return True
                    
        return True

    def capture_with_confirmation(self):
        """Capture image with user confirmation"""
        print("\n" + "="*60)
        print("📸 REFERENCE IMAGE CAPTURE")
        print("="*60)
        
        # Ask for garment color first
        self.ask_garment_color()
        
        # Show live preview
        cv2.namedWindow("Reference Image Capture", cv2.WINDOW_NORMAL)
        cv2.resizeWindow("Reference Image Capture", 1024, 768)
        
        # Capture the frame
        if not self.capture_reference_frame():
            cv2.destroyAllWindows()
            return False
        
        # Show captured image for confirmation
        if self.captured_image is not None:
            # Add info overlay
            display_img = self.captured_image.copy()
            cv2.putText(display_img, f"CAPTURED - {self.garment_color.upper()} MODE", 
                       (20, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            cv2.putText(display_img, f"Resolution: {self.captured_image.shape[1]}x{self.captured_image.shape[0]}", 
                       (20, 70), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 0), 2)
            cv2.putText(display_img, "Press 's' to SAVE, 'c' to CAPTURE AGAIN, 'q' to QUIT", 
                       (20, display_img.shape[0] - 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
            
            cv2.imshow("Reference Image Capture", display_img)
            
            while True:
                key = cv2.waitKey(0) & 0xFF
                if key == ord('s'):
                    filename = input("\nEnter filename (default: reference_image.jpg): ").strip()
                    if not filename:
                        filename = "reference_image.jpg"
                    if not filename.endswith(('.jpg', '.jpeg', '.png')):
                        filename += '.jpg'
                    
                    if self.save_reference_image(filename):
                        print("✅ Image saved successfully!")
                    else:
                        print("❌ Failed to save image")
                    break
                    
                elif key == ord('c'):
                    print("\n🔄 Capturing new image...")
                    if not self.capture_reference_frame():
                        break
                    
                    # Update display with new image
                    display_img = self.captured_image.copy()
                    cv2.putText(display_img, f"CAPTURED - {self.garment_color.upper()} MODE", 
                               (20, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                    cv2.putText(display_img, f"Resolution: {self.captured_image.shape[1]}x{self.captured_image.shape[0]}", 
                               (20, 70), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 0), 2)
                    cv2.putText(display_img, "Press 's' to SAVE, 'c' to CAPTURE AGAIN, 'q' to QUIT", 
                               (20, display_img.shape[0] - 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
                    cv2.imshow("Reference Image Capture", display_img)
                    
                elif key == ord('q'):
                    print("\n👋 Exiting without saving")
                    break
        
        cv2.destroyAllWindows()
        return True

    def run(self):
        """Main execution function"""
        print("=" * 60)
        print("📸 MINDVISION CAMERA REFERENCE IMAGE CAPTURE")
        print("=" * 60)
        print("This tool captures reference images with optimal settings")
        print("based on garment color (black/other)")
        print("=" * 60)
        
        # Initialize camera
        if not self.initialize_camera():
            print("❌ Failed to initialize camera. Exiting.")
            return
        
        try:
            # Capture image with confirmation
            self.capture_with_confirmation()
            
        finally:
            # Cleanup
            if self.camera_obj:
                self.camera_obj.close()
                print("\n👋 Camera closed. Goodbye!")

# Simple one-shot capture function
def quick_capture(filename="reference_image.jpg", garment_color='other'):
    """Quick capture function for easy integration"""
    capturer = ReferenceImageCapturer()
    
    if not capturer.initialize_camera():
        return False
    
    capturer.garment_color = garment_color
    
    # Set camera settings
    if capturer.camera_obj and capturer.camera_obj.hCamera > 0:
        if garment_color == 'black':
            CameraSetAnalogGain(capturer.camera_obj.hCamera, 150)
            CameraSetAeState(capturer.camera_obj.hCamera, 0)
        else:
            CameraSetAnalogGain(capturer.camera_obj.hCamera, 64)
            CameraSetAeState(capturer.camera_obj.hCamera, 1)
    
    # Capture frame
    frame = capturer.camera_obj.grab()
    if frame is not None:
        image = cv2.cvtColor(frame, cv2.COLOR_GRAY2BGR)
        cv2.imwrite(filename, image)
        print(f"✅ Image captured and saved as {filename}")
        capturer.camera_obj.close()
        return True
    
    capturer.camera_obj.close()
    return False

# Batch capture function
def batch_capture(base_filename="image", count=5, garment_color='other'):
    """Capture multiple images in sequence"""
    capturer = ReferenceImageCapturer()
    
    if not capturer.initialize_camera():
        return False
    
    capturer.garment_color = garment_color
    
    # Set camera settings
    if capturer.camera_obj and capturer.camera_obj.hCamera > 0:
        if garment_color == 'black':
            CameraSetAnalogGain(capturer.camera_obj.hCamera, 150)
            CameraSetAeState(capturer.camera_obj.hCamera, 0)
        else:
            CameraSetAnalogGain(capturer.camera_obj.hCamera, 64)
            CameraSetAeState(capturer.camera_obj.hCamera, 1)
    
    print(f"\n📸 Capturing {count} images...")
    
    for i in range(count):
        print(f"\nCapture {i+1}/{count}")
        input("Press Enter to capture...")
        
        frame = capturer.camera_obj.grab()
        if frame is not None:
            image = cv2.cvtColor(frame, cv2.COLOR_GRAY2BGR)
            filename = f"{base_filename}_{i+1}.jpg"
            cv2.imwrite(filename, image)
            print(f"✅ Saved: {filename}")
        else:
            print(f"❌ Failed to capture {i+1}")
    
    capturer.camera_obj.close()
    return True

if __name__ == "__main__":
    # Run the interactive capture
    app = ReferenceImageCapturer()
    app.run()
    
    # Uncomment for quick capture:
    # quick_capture("my_reference.jpg", garment_color='other')
    
    # Uncomment for batch capture:
    # batch_capture("garment", count=3, garment_color='black')