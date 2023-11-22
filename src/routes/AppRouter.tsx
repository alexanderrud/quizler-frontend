import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../components/home/Home";
import Register from "../pages/Register/Register";
import Header from "../components/header/Header";
import Alert from "../components/UI/alert/Alert";
import {useAlert} from "../components/UI/alert/AlertContext";

const AppRouter = () => {
    const {isShown} = useAlert();

    return (
        <BrowserRouter>
            <Header/>
            {isShown ? <Alert/> : ''}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;