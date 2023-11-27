export type AlertContextProps = {
    alertIsShown: boolean,
    showSignInAlert: boolean,
    showLogoutAlert: boolean,
    setShowSignInAlert: (showSignInAlert: boolean) => void,
    setShowLogoutAlert: (showLogoutAlert: boolean) => void,
    showAlert: () => void,
    hideAlert: () => void,
}