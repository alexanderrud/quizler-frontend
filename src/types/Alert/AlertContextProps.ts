export type AlertContextProps = {
    alertIsShown: boolean,
    showSignInAlert: boolean,
    showLogoutAlert: boolean,
    setShowSignInAlert: (showSignInAlert: boolean) => void,
    setShowLogoutAlert: (showLogoutAlert: boolean) => void,
    showAlert: (alertMessage: string, alertType: string) => void,
    hideAlert: () => void,
}