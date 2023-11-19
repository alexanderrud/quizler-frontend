import AuthForm from "../../components/form/AuthForm";
import Alert from "../../components/UI/alert/Alert";

const Login = () => {
    return (
        <div>
            <AuthForm isRegister={false}/>
        </div>
    );
};

export default Login;