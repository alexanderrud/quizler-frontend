export type AlertContextProps = {
    isShown: boolean,
    alertMessage: string,
    alertType: string,
    setIsShown: (isShown: boolean) => void
    setAlertMessage: (alertMessage: string) => void,
    setAlertType: (alertType: string) => void
}