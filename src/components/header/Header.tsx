import './Header.css';
import {Link} from "react-router-dom";
import {useAuth} from "../auth/AuthContext";
import LogoutButton from "../UI/button/LogoutButton";

const Header = () => {
    const {isAuth} = useAuth();

    return (
        <div>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-7 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/">
                        <span className="text-xl font-bold">Quizler</span>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 justify-end">
                    {isAuth ? (
                        <div className="logout">
                            <LogoutButton/>
                        </div>
                    ) : (
                        <>
                            <div className="register pr-5">
                                <Link to="register" className="quizler-link">
                                    <span>Register</span>
                                    <span className="quizler-link__selected bg-blue-400"></span>
                                </Link>
                            </div>
                            <div className="login">
                                <Link to="login" className="quizler-link">
                                    <span>Log in</span>
                                    <span className="quizler-link__selected bg-yellow-400"></span>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;