import Api from './Api'
import AnnotationUploadController from './AnnotationUploadController'
import Auth from './Auth'
import OperatorController from './OperatorController'
import BrandController from './BrandController'
import PurchaseOrderController from './PurchaseOrderController'
import ArticleRegistrationController from './ArticleRegistrationController'
import ArticleController from './ArticleController'
import CameraCaptureController from './CameraCaptureController'
import ArticleImageController from './ArticleImageController'
import MeasurementController from './MeasurementController'
import DeveloperSettingsController from './DeveloperSettingsController'
import DirectorAnalyticsController from './DirectorAnalyticsController'
import SystemSettingsController from './SystemSettingsController'
import Settings from './Settings'

const Controllers = {
    Api: Object.assign(Api, Api),
    AnnotationUploadController: Object.assign(AnnotationUploadController, AnnotationUploadController),
    Auth: Object.assign(Auth, Auth),
    OperatorController: Object.assign(OperatorController, OperatorController),
    BrandController: Object.assign(BrandController, BrandController),
    PurchaseOrderController: Object.assign(PurchaseOrderController, PurchaseOrderController),
    ArticleRegistrationController: Object.assign(ArticleRegistrationController, ArticleRegistrationController),
    ArticleController: Object.assign(ArticleController, ArticleController),
    CameraCaptureController: Object.assign(CameraCaptureController, CameraCaptureController),
    ArticleImageController: Object.assign(ArticleImageController, ArticleImageController),
    MeasurementController: Object.assign(MeasurementController, MeasurementController),
    DeveloperSettingsController: Object.assign(DeveloperSettingsController, DeveloperSettingsController),
    DirectorAnalyticsController: Object.assign(DirectorAnalyticsController, DirectorAnalyticsController),
    SystemSettingsController: Object.assign(SystemSettingsController, SystemSettingsController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers