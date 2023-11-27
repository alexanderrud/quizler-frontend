import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../components/home/Home";
import Header from "../components/header/Header";
import Alert from "../components/UI/alert/Alert";
import {useAlert} from "../components/UI/alert/AlertContext";

const AppRouter = () => {
    const {isShown} = useAlert();

    return (
        <BrowserRouter>
            <Header/>
            {isShown && (<Alert/>)}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;