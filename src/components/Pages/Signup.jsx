import Oauth from "../FormElements/Oauth";
import SignupHeader from "../Signup/SignupHeader";
import SignupForm from "../Signup/SignupForm";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="px-8 py-12 flex flex-col form-background w-full xl:w-[50%]">
      <SignupHeader />
      <SignupForm />
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
