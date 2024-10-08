import LoginForm from "../components/Login/LoginForm";
import LoginHeader from "../components/Login/LoginHeader";
import Oauth from "../components/FormElements/Oauth";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="px-8 py-12 flex flex-col form-background w-full xl:w-[50%]">
      <LoginHeader />
      <LoginForm />
      <Oauth />

      <section className="user-management-action">
        Don't have an account?{" "}
        <Link to="/user_management/signup" className="hyperlink">
          {" "}
          Sign up
        </Link>
      </section>
    </div>
  );
};

export default Login;
