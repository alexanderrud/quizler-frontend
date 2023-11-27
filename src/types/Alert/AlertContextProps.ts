export type AlertContextProps = {
    isShown: boolean,
    showSignInAlert: boolean,
    showLogoutAlert: boolean,
    setShowSignInAlert: (showSignInAlert: boolean) => void,
    setShowLogoutAlert: (showLogoutAlert: boolean) => void,
    showAlert: () => void,
    hideAlert: () => void,
}