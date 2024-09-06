import FormElement from "../FormElements/FormInput";
import PassowordElement from "../FormElements/PassowordElement";
import TermsPolicy from "../FormElements/TermsPolicy";
import { useState } from "react";


const SignupForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [terms,setTerms]=useState(false)


  const handleSubmit=(e)=>{
    e.preventDefault()

    console.log({firstname,lastname,email,pwd,terms})
  }

  return (
    <section className="mb-4">
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

        

        <button type="submit" onClick={handleSubmit} className="w-full button button-primary">Signup</button>
      </form>
    </section>
  );
};

export default SignupForm;
