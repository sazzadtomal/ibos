import Oauth from "../FormElements/Oauth";
import LoginHeader from "./SignupHeader";
import LoginForm from "./SignupForm";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="px-8 py-12 flex flex-col form-background w-full xl:w-[50%]">
      <LoginHeader />
      <LoginForm />
      <Oauth />
      <section className="user-management-action">
        Have and account?{" "}
        <Link to="/user_management/login" className="hyperlink">
          {" "}
          Sign in
        </Link>
      </section>
    </div>
  );
};
export default Signup;
