import Oauth from "../FormElements/Oauth";
import LoginHeader from "./SignupHeader";
import LoginForm from "./SignupForm";

const Signup = () => {
  return (
    <div className="px-8 py-12 flex flex-col form-background w-full xl:w-[50%]">
      <LoginHeader />
      <LoginForm />
      <Oauth />
      <section className="user-management-action">
        Have and account?{" "}
        <a className="hyperlink" href="">
          {" "}
          Sign in
        </a>
      </section>
    </div>
  );
};
export default Signup;
