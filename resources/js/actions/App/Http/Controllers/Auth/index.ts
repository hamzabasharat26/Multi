import FixedCredentialLoginController from './FixedCredentialLoginController'
import DeveloperLoginController from './DeveloperLoginController'
import AuthenticatedSessionController from './AuthenticatedSessionController'

const Auth = {
    FixedCredentialLoginController: Object.assign(FixedCredentialLoginController, FixedCredentialLoginController),
    DeveloperLoginController: Object.assign(DeveloperLoginController, DeveloperLoginController),
    AuthenticatedSessionController: Object.assign(AuthenticatedSessionController, AuthenticatedSessionController),
}

export default Auth