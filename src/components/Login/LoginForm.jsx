import PassowordElement from "../FormElements/PassowordElement";
import FormElement from "../FormElements/FormInput";
import TermsPolicy from "../FormElements/TermsPolicy";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const EmailREGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const LoginForm = () => {
  const {setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setValidEmail(EmailREGEX.test(email));
  }, [email])




  const handleSubmit = async (e) => {
    e.preventDefault();

    const validEmail = EmailREGEX.test(email);

    if (validEmail && pwd && terms) {
      try {
        const response = await axios.post(
          "/auth",
          JSON.stringify({ email, pwd }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        const accessToken = response?.data?.accessToken;
        setAuth({ email, pwd, accessToken });
        setEmail("");
        setPwd("");

        navigate("/")






      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      }
    } else {
      setErrMsg("Enter Valid Email Address");
    }
  };

  return (
    <section className="mb-4">
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <form className="flex flex-col gap-6" >
        <FormElement
          id="email"
          value={email}
          onChange={setEmail}
          type="email"
          label="Email address"
        />

        <PassowordElement
          value={pwd}
          onChange={setPwd}
          showPwd={showPwd}
          setShowPwd={setShowPwd}
        />

        <TermsPolicy value={terms} onChange={setTerms} />

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full button button-primary"
          disabled={validEmail && pwd && terms ? false : true}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
