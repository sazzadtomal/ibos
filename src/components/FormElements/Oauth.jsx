import apple from "../../assets/icons/apple_logo.png"
import google from "../../assets/icons/google_logo.png"

const Oauth = () => {
  return (
    <section className="w-full">
    <div className="flex justify-between items-center w-full">
      <div className="flex-grow line"></div>
      <div>or</div>
      <div className="flex-grow line"></div>
    </div>
    <div className="flex w-full gap-5 text-[1.2rem] font-medium my-4">
       <div className="flex flex-grow  border justify-center items-center button ">
        <div className="flex gap-5" >
          <img src={google} alt="" />
          <button >Sign in with Google</button>
        </div>
        </div>
       <div className="flex flex-grow border justify-center items-center button">
        <div className="flex gap-5">
          <img src={apple} alt="" />
          <button >Sign in with Google</button>
        </div>
        </div> 
    </div>
  </section>
  )
}

export default Oauth