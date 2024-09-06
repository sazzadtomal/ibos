import FormElement from "../FormElements/FormInput";
import PassowordElement from "../FormElements/PassowordElement";
import TermsPolicy from "../FormElements/TermsPolicy";
import { useState,useEffect } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";


const EmailREGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


const SignupForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [terms,setTerms]=useState(false)
  const [validEmail, setValidEmail] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();



  useEffect(() => {
    setValidEmail(EmailREGEX.test(email));
  }, [email])
 
 
 
 
  const handleSubmit=async (e)=>{
    e.preventDefault()

    const validEmail = EmailREGEX.test(email);

    if (validEmail && pwd && terms){
      try {
           const response = await axios.post(
          "/register",
          JSON.stringify({ firstname,lastname,email, pwd }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        alert("New User is Created")

        navigate("/user_management/login")

      } catch (err) {

        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else if (err.response?.status === 409) {
          setErrMsg("User Already Exists");}
        else  {
          setErrMsg("Login Failed");
        }
        }

    }

  }

  
  
  return (
    <section className="mb-4">
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <form className="flex flex-col gap-6" action="">
        <div className="flex gap-5">
          <FormElement
            id="firstname"
            value={firstname}
            onChange={setFirstName}
            type="text"
            label="First name (optional)"
          />
          <FormElement
            id="lastname"
            value={lastname}
            onChange={setLastName}
            type="text"
            label="Last name (optional)"
          />
        </div>
        <FormElement
          id="email"
          value={email}
          onChange={setEmail}
          type="email"
          label="Email address"
        />

        <PassowordElement value={pwd} onChange={setPwd} showPwd={showPwd} setShowPwd={setShowPwd}/>

        <TermsPolicy value={terms} onChange={setTerms}/>

        

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full button button-primary"
          disabled={validEmail && pwd && terms ? false : true}
        >
          Signup
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
