import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import Oauth from "../FormElements/Oauth";
const Login = () => {
  return (
    <div className="px-8 py-12 flex flex-col form-background w-full xl:w-[50%]">
      <LoginHeader />
      <LoginForm />
      <Oauth />

      <section className="user-management-action">
        Don't have an account?{" "}
        <a className="hyperlink" href="">
          {" "}
          Sign up
        </a>
      </section>
    </div>
  );
};

export default Login;
