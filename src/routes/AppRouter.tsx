import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../components/home/Home";
import Header from "../components/header/Header";
import Alert from "../components/UI/alert/Alert";
import {useAlert} from "../components/UI/alert/AlertContext";
import {AlertStatuses} from "../constants/AlertStatuses";

const AppRouter = () => {
    const {isShown, showSignInAlert, showLogoutAlert} = useAlert();

    return (
        <BrowserRouter>
            <Header/>
            {isShown && showSignInAlert && (
                <Alert alertMessage="You're logged in!" alertType={AlertStatuses.SUCCESS}/>
            )}
            {isShown && showLogoutAlert && (
                <Alert alertMessage="You're logged out!" alertType={AlertStatuses.INFO}/>
            )}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;