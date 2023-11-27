export type AlertContextProps = {
    isShown: boolean,
    alertMessage: string,
    alertType: string,
    showAlert: () => void,
    hideAlert: () => void,
    setAlertMessage: (alertMessage: string) => void,
    setAlertType: (alertType: string) => void
}