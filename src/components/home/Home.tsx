import Alert from "../UI/alert/Alert";
import {AlertStatuses} from "../../constants/AlertStatuses";

const Home = () => {
    return (
        <div>
            <Alert alertMessage="You're logged in!" alertType={AlertStatuses.SUCCESS}/>
        </div>
    );
};

export default Home;