import Alert from "../UI/alert/Alert";
import {useAuth} from "../auth/AuthContext";

const Home = () => {
    const {isAuth} = useAuth();

    return (
        <div>
            {isAuth ? <Alert alertType="success" message="you're logged in!"/> : ''}
        </div>
    );
};

export default Home;