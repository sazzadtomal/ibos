import PassowordElement from "../FormElements/PassowordElement";
import FormElement from "../FormElements/FormInput";
import TermsPolicy from "../FormElements/TermsPolicy";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ firstname, lastname, email, pwd, terms });
  };

  return (
    <section className="mb-4">
      <form className="flex flex-col gap-6" action="">
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
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
