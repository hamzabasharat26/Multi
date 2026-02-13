import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import brandRoutes from '@/routes/brands';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import {
    ArrowLeft,
    Camera,
    Check,
    CircleDot,
    Loader2,
    Moon,
    RefreshCw,
    Save,
    Sun,
    Wifi,
    WifiOff,
    X,
    ImageIcon,
    Upload,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Brand {
    id: number;
    name: string;
}

interface ArticleType {
    id: number;
    name: string;
}

interface Article {
    id: number;
    article_style: string;
    description: string | null;
    article_type: ArticleType;
}

interface Props {
    brand: Brand;
    article: Article;
    selectedSize: string;
}

type Step = 'mode_selection' | 'live_preview' | 'captured_preview' | 'saving';

interface CameraStatus {
    status: 'ready' | 'no_camera' | 'offline';
    camera_type: string | null;
    current_mode: string;
}

const CAMERA_SERVER = 'http://localhost:5555';

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CameraCapture({ brand, article, selectedSize }: Props) {
    // State
    const [step, setStep] = useState<Step>('mode_selection');
    const [imageMode, setImageMode] = useState<'black' | 'other' | null>(null);
    const [cameraStatus, setCameraStatus] = useState<CameraStatus | null>(null);
    const [cameraChecking, setCameraChecking] = useState(false);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [capturedMeta, setCapturedMeta] = useState<{
        width: number;
        height: number;
        timestamp: string;
        camera_type: string;
    } | null>(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [saveSuccess, setSaveSuccess] = useState(false);

    // File upload fallback
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Current size (from query param or default)
    const [size, setSize] = useState(selectedSize || 'M');
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Brands', href: brandRoutes.index().url },
        { title: brand.name, href: brandRoutes.show(brand.id).url },
        { title: 'Articles', href: brandRoutes.articles.index(brand.id).url },
        {
            title: article.article_style,
            href: brandRoutes.articles.show({ brand: brand.id, article: article.id }).url,
        },
        { title: 'Camera Capture', href: '#' },
    ];

    // -------------------------------------------------------------------
    // Camera server communication
    // -------------------------------------------------------------------

    const checkCameraServer = useCallback(async () => {
        setCameraChecking(true);
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            const res = await fetch(`${CAMERA_SERVER}/api/status`, {
                signal: controller.signal,
            });
            clearTimeout(timeoutId);
            if (res.ok) {
                const data = await res.json();
                setCameraStatus(data);
                setError(null);
            } else {
                setCameraStatus({ status: 'offline', camera_type: null, current_mode: 'other' });
            }
        } catch {
            setCameraStatus({ status: 'offline', camera_type: null, current_mode: 'other' });
        } finally {
            setCameraChecking(false);
        }
    }, []);

    // Check camera on mount
    useEffect(() => {
        checkCameraServer();
    }, [checkCameraServer]);

    const setModeOnServer = async (mode: 'black' | 'other') => {
        try {
            await fetch(`${CAMERA_SERVER}/api/mode`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mode }),
            });
        } catch {
            // Mode will be included in metadata regardless
        }
    };

    const handleModeSelect = async (mode: 'black' | 'other') => {
        setImageMode(mode);
        setError(null);

        // Set mode on camera server
        await setModeOnServer(mode);

        // Brief delay for camera to adjust
        setTimeout(() => {
            setStep('live_preview');
        }, 300);
    };

    const handleCapture = async () => {
        setIsCapturing(true);
        setError(null);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);
            const res = await fetch(`${CAMERA_SERVER}/api/capture`, {
                method: 'POST',
                signal: controller.signal,
            });
            clearTimeout(timeoutId);

            if (!res.ok) {
                throw new Error('Capture failed');
            }

            const data = await res.json();
            if (data.success) {
                setCapturedImage(`data:image/jpeg;base64,${data.image}`);
                setCapturedMeta({
                    width: data.width,
                    height: data.height,
                    timestamp: data.timestamp,
                    camera_type: data.camera_type,
                });
                setStep('captured_preview');
            } else {
                throw new Error(data.error || 'Capture failed');
            }
        } catch (err: any) {
            setError(err.message || 'Failed to capture image from camera server');
        } finally {
            setIsCapturing(false);
        }
    };

    const handleRetake = async () => {
        setCapturedImage(null);
        setCapturedMeta(null);
        setStep('live_preview');
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new Image();
                img.onload = () => {
                    setCapturedImage(reader.result as string);
                    setCapturedMeta({
                        width: img.naturalWidth,
                        height: img.naturalHeight,
                        timestamp: new Date()
                            .toISOString()
                            .replace(/[-:T]/g, '')
                            .slice(0, 15),
                        camera_type: 'file_upload',
                    });
                    setStep('captured_preview');
                };
                img.src = reader.result as string;
            };
            reader.readAsDataURL(file);
        }
        // Reset input so same file can be re-selected
        event.target.value = '';
    };

    const dataURLtoBlob = (dataURL: string): Blob => {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };

    const handleSave = async () => {
        if (!capturedImage) return;

        setIsSaving(true);
        setStep('saving');
        setError(null);

        try {
            const blob = dataURLtoBlob(capturedImage);
            const modeLabel = imageMode === 'black' ? 'black' : 'other';
            const timestamp = capturedMeta?.timestamp || Date.now().toString();
            const fileName = `mv_${modeLabel}_${article.article_style}_${size}_${timestamp}.jpg`;

            const file = new File([blob], fileName, { type: 'image/jpeg' });

            const formData = new FormData();
            formData.append('image', file);
            formData.append('size', size);

            const csrfToken =
                document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

            const response = await fetch(
                `/brands/${brand.id}/articles/${article.id}/images`,
                {
                    method: 'POST',
                    body: formData,
                    headers: { 'X-CSRF-TOKEN': csrfToken },
                },
            );

            if (response.ok) {
                setSaveSuccess(true);
                // Redirect after brief success display
                setTimeout(() => {
                    router.visit(
                        brandRoutes.articles.show({ brand: brand.id, article: article.id }).url,
                    );
                }, 1500);
            } else {
                const data = await response.json().catch(() => null);
                throw new Error(data?.message || 'Failed to save image');
            }
        } catch (err: any) {
            setError(err.message || 'Failed to save image');
            setStep('captured_preview');
        } finally {
            setIsSaving(false);
        }
    };

    const handleBack = () => {
        router.visit(
            brandRoutes.articles.show({ brand: brand.id, article: article.id }).url,
        );
    };

    const isServerOnline = cameraStatus?.status === 'ready';

    // -------------------------------------------------------------------
    // Render
    // -------------------------------------------------------------------

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Camera Capture - ${article.article_style}`} />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Header Bar */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" onClick={handleBack}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Article
                        </Button>
                        <div>
                            <h1 className="text-xl font-semibold">Reference Image Capture</h1>
                            <p className="text-sm text-neutral-500">
                                {brand.name} / {article.article_style}
                            </p>
                        </div>
                    </div>

                    {/* Status badges */}
                    <div className="flex items-center gap-3">
                        {/* Size Selector */}
                        <div className="flex items-center gap-1 rounded-lg border px-3 py-1.5">
                            <span className="mr-1 text-xs text-neutral-500">Size:</span>
                            {sizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
                                        size === s
                                            ? 'bg-[#6C88C4] text-white'
                                            : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
                                    }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        {/* Camera status */}
                        <div
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                                isServerOnline
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            }`}
                        >
                            {isServerOnline ? (
                                <Wifi className="h-3 w-3" />
                            ) : (
                                <WifiOff className="h-3 w-3" />
                            )}
                            {cameraChecking
                                ? 'Checking...'
                                : isServerOnline
                                  ? 'Camera Ready'
                                  : 'Camera Offline'}
                        </div>

                        {!isServerOnline && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={checkCameraServer}
                                disabled={cameraChecking}
                            >
                                <RefreshCw
                                    className={`h-3 w-3 ${cameraChecking ? 'animate-spin' : ''}`}
                                />
                            </Button>
                        )}
                    </div>
                </div>

                {/* Error banner */}
                {error && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400">
                        <X className="h-4 w-4 flex-shrink-0" />
                        <span>{error}</span>
                        <button
                            onClick={() => setError(null)}
                            className="ml-auto text-red-500 hover:text-red-700"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                )}

                {/* ============================================================= */}
                {/* STEP 1: Mode Selection                                         */}
                {/* ============================================================= */}
                {step === 'mode_selection' && (
                    <div className="flex flex-1 flex-col items-center justify-center gap-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">Select Image Type</h2>
                            <p className="mt-1 text-sm text-neutral-500">
                                Choose the garment color type for optimal camera settings
                            </p>
                        </div>

                        <div className="grid w-full max-w-2xl gap-6 md:grid-cols-2">
                            {/* Black Image */}
                            <button
                                onClick={() => handleModeSelect('black')}
                                disabled={!isServerOnline}
                                className="group relative flex flex-col items-center gap-4 rounded-2xl border-2 border-neutral-200 bg-white p-8 text-center transition-all hover:border-neutral-900 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-400"
                            >
                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-900 text-white transition-transform group-hover:scale-110 dark:bg-neutral-100 dark:text-neutral-900">
                                    <Moon className="h-10 w-10" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Black Image</h3>
                                    <p className="mt-1 text-xs text-neutral-500">
                                        Dark colored garments
                                    </p>
                                </div>
                            </button>

                            {/* Other Colors */}
                            <button
                                onClick={() => handleModeSelect('other')}
                                disabled={!isServerOnline}
                                className="group relative flex flex-col items-center gap-4 rounded-2xl border-2 border-neutral-200 bg-white p-8 text-center transition-all hover:border-[#FFCD73] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-[#FFCD73]"
                            >
                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FFCD73] text-white transition-transform group-hover:scale-110">
                                    <Sun className="h-10 w-10" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Other / All Colors</h3>
                                    <p className="mt-1 text-xs text-neutral-500">
                                        Light, colored, or mixed garments
                                    </p>
                                </div>
                            </button>
                        </div>

                        {/* Camera offline message */}
                        {!isServerOnline && !cameraChecking && (
                            <div className="max-w-lg text-center">
                                <p className="text-sm text-neutral-500">
                                    Camera server is not running. Start it with:
                                </p>
                                <code className="mt-2 block rounded bg-neutral-100 px-4 py-2 text-xs dark:bg-neutral-800">
                                    python python/camera_server.py
                                </code>
                                <p className="mt-3 text-xs text-neutral-400">
                                    Or use file upload as an alternative:
                                </p>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-2"
                                    onClick={() => {
                                        if (!imageMode) setImageMode('other');
                                        fileInputRef.current?.click();
                                    }}
                                >
                                    <Upload className="mr-2 h-4 w-4" />
                                    Upload Image File
                                </Button>
                            </div>
                        )}
                    </div>
                )}

                {/* ============================================================= */}
                {/* STEP 2: Live Preview                                           */}
                {/* ============================================================= */}
                {step === 'live_preview' && (
                    <div className="flex flex-1 flex-col gap-4">
                        {/* Mode badge + info bar */}
                        <div className="flex items-center justify-between rounded-lg border bg-neutral-50 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900">
                            <div className="flex items-center gap-3">
                                <span
                                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                                        imageMode === 'black'
                                            ? 'bg-neutral-900 text-white dark:bg-neutral-200 dark:text-neutral-900'
                                            : 'bg-[#FFCD73] text-neutral-900'
                                    }`}
                                >
                                    {imageMode === 'black' ? (
                                        <Moon className="h-3 w-3" />
                                    ) : (
                                        <Sun className="h-3 w-3" />
                                    )}
                                    {imageMode === 'black' ? 'Black Mode' : 'Other Colors'}
                                </span>
                                <span className="text-xs text-neutral-500">
                                    Size: <strong>{size}</strong>
                                </span>
                                <CircleDot className="h-3 w-3 animate-pulse text-red-500" />
                                <span className="text-xs font-medium text-red-500">LIVE</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        setStep('mode_selection');
                                        setImageMode(null);
                                    }}
                                >
                                    Change Mode
                                </Button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <Upload className="mr-1 h-3 w-3" />
                                    Upload
                                </Button>
                            </div>
                        </div>

                        {/* MJPEG Stream */}
                        <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border-2 border-neutral-200 bg-black dark:border-neutral-700">
                            {isServerOnline ? (
                                <img
                                    src={`${CAMERA_SERVER}/api/stream`}
                                    alt="Live Camera Feed"
                                    className="h-full max-h-[calc(100vh-320px)] w-auto object-contain"
                                    onError={() =>
                                        setError(
                                            'Camera stream interrupted. Check camera server.',
                                        )
                                    }
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-4 text-white">
                                    <WifiOff className="h-16 w-16 text-neutral-400" />
                                    <p className="text-neutral-400">Camera server not available</p>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={checkCameraServer}
                                    >
                                        <RefreshCw className="mr-2 h-3 w-3" />
                                        Retry Connection
                                    </Button>
                                </div>
                            )}

                            {/* Capture overlay */}
                            {isCapturing && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/20">
                                    <div className="rounded-full bg-white p-4">
                                        <Loader2 className="h-8 w-8 animate-spin text-[#6C88C4]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Capture Controls */}
                        <div className="flex items-center justify-center gap-4 pb-2">
                            <Button variant="outline" onClick={handleBack}>
                                Cancel
                            </Button>
                            <Button
                                size="lg"
                                onClick={handleCapture}
                                disabled={isCapturing || !isServerOnline}
                                className="bg-[#6C88C4] px-8 text-white hover:bg-[#5a76b2]"
                            >
                                {isCapturing ? (
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                ) : (
                                    <Camera className="mr-2 h-5 w-5" />
                                )}
                                {isCapturing ? 'Capturing...' : 'Capture Image'}
                            </Button>
                        </div>
                    </div>
                )}

                {/* ============================================================= */}
                {/* STEP 3: Captured Preview                                        */}
                {/* ============================================================= */}
                {step === 'captured_preview' && capturedImage && (
                    <div className="flex flex-1 flex-col gap-4">
                        {/* Info bar */}
                        <div className="flex items-center justify-between rounded-lg border bg-[#AFDDD5]/20 px-4 py-2 dark:border-neutral-700">
                            <div className="flex items-center gap-3">
                                <Check className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                                    Image Captured Successfully
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-neutral-500">
                                {capturedMeta && (
                                    <>
                                        <span>
                                            {capturedMeta.width} x {capturedMeta.height}
                                        </span>
                                        <span>|</span>
                                        <span className="capitalize">
                                            Mode: {imageMode || 'other'}
                                        </span>
                                        <span>|</span>
                                        <span>Size: {size}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Preview Image */}
                        <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl border-2 border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900">
                            <img
                                src={capturedImage}
                                alt="Captured Preview"
                                className="h-full max-h-[calc(100vh-320px)] w-auto rounded-lg object-contain"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-4 pb-2">
                            <Button variant="outline" onClick={handleBack}>
                                <X className="mr-2 h-4 w-4" />
                                Discard
                            </Button>
                            <Button variant="outline" onClick={handleRetake}>
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Retake
                            </Button>
                            <Button
                                size="lg"
                                onClick={handleSave}
                                className="bg-green-600 px-8 text-white hover:bg-green-700"
                            >
                                <Save className="mr-2 h-5 w-5" />
                                Confirm & Save
                            </Button>
                        </div>
                    </div>
                )}

                {/* ============================================================= */}
                {/* STEP 4: Saving                                                 */}
                {/* ============================================================= */}
                {step === 'saving' && (
                    <div className="flex flex-1 flex-col items-center justify-center gap-6">
                        {saveSuccess ? (
                            <>
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                    <Check className="h-10 w-10 text-green-600" />
                                </div>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold text-green-700 dark:text-green-400">
                                        Image Saved Successfully!
                                    </h2>
                                    <p className="mt-1 text-sm text-neutral-500">
                                        Redirecting to article page...
                                    </p>
                                </div>
                            </>
                        ) : isSaving ? (
                            <>
                                <Loader2 className="h-12 w-12 animate-spin text-[#6C88C4]" />
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">Saving Image...</h2>
                                    <p className="mt-1 text-sm text-neutral-500">
                                        Uploading to {article.article_style} / Size: {size}
                                    </p>
                                </div>
                            </>
                        ) : null}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
