import { useState } from "react";
import { TextInput } from "../components/Form/TextInput";
import { Button } from "../components/Common/Button";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { CheckboxInput } from "../components/Form/CheckboxInput";
import CheckboxChecked from "../components/Form/CheckboxChecked";
import CheckboxUnchecked from "../components/Form/CheckboxUnchecked";

export const SignupForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Error signing up:", error.message);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="pl-5 pb-12 flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-zinc-800 text-5xl font-bold leading-[57px]">
          SKAPA KONTO
        </div>
        <div className="text-base font-normal leading-snug">
          Som student kan du skapa ett konto för att ta del av vilka företag som
          kommer vara på plats under minglet och deras kontaktinformation.{" "}
        </div>
        <div className="inline-flex text-base font-normal">
          Har du redan ett konto?
          <button
            className="underline ml-2 text-base font-normal"
            onClick={() => navigate("/login")}
          >
            Logga in här!
          </button>
        </div>
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSignUp}>
        <div className="flex flex-col gap-2 px-6">
          <label htmlFor="email">E-POST</label>
          <TextInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="namn@foretag.com"
          />
        </div>
        <div className="flex flex-col gap-2 px-6">
          <label htmlFor="password">LÖSENORD</label>
          <TextInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
        </div>
        <div className="flex justify-center mt-2 mb-12">
          <div className="flex gap-2 relative">
            <CheckboxInput
              id="policy-checkbox"
              value="policy-consent"
              onChange={handleInputChange}
              required={true}
            />{" "}
            <label htmlFor="policy-checkbox">
              Jag godkänner
              <a className="underline pl-1" href="/">
                villkoren
              </a>
            </label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit">SKAPA KONTO</Button>
        </div>
      </form>
    </div>
  );
};
