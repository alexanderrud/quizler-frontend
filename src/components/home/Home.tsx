import Alert from "../UI/alert/Alert";
import {useAlert} from "../UI/alert/AlertContext";

const Home = () => {
    const {isShown} = useAlert();

    return (
        <div>
            {isShown ? <Alert/> : ''}
        </div>
    );
};

export default Home;