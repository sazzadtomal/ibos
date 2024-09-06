import Logo from "../Logo_big";

const LoginHeader = () => {
  return (
    <section className="text-center mb-10">
        <p className="font-semibold text-[2.4rem] text-black leading-[2.8rem]">
          Welcome To
        </p>
        <Logo />
        <h3 className="font-medium text-[1.6rem] leading-[1.9rem] muted">
          Signup for purchase your desire products
        </h3>
      </section>
  )
}

export default LoginHeader