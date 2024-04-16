import { useState } from "react";
import { TextInput } from "../components/Form/TextInput";
import { Button } from "../components/Common/Button";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { CheckboxInput } from "../components/Form/CheckboxInput";
import CheckboxChecked from "../components/Form/CheckboxChecked";
import CheckboxUnchecked from "../components/Form/CheckboxUnchecked";

export const SignupForm = ({ onClose }) => {
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

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 md:py-10"
      onClick={onClose}
    >
      <div
        className="bg-white w-screen h-screen md:h-[612px] md:w-[688px] p-6 rounded shadow-md max-w-md mx-auto"
        onClick={stopPropagation}
      >
        <div className="flex justify-end">
          <button onClick={onClose}>
            <img src="/assets/YrgoX.svg" alt="" />
          </button>
        </div>
        <div className="text-zinc-800 text-5xl font-bold leading-[57px]">
          SKAPA KONTO
        </div>
        <div className="text-base font-normal leading-snug">
          Som student kan du skapa ett konto för att ta del av vilka företag som
          kommer vara på plats under minglet och deras kontaktinformation.{" "}
        </div>
        <form className="flex flex-col gap-6 py-8" onSubmit={handleSignUp}>
          <div className="flex flex-col gap-2 px-6 ">
            <label htmlFor="email">E-POST</label>
            <TextInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="namn@foretag.com"
              className="bg-zinc-100 border-none shadow"
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
              className="bg-zinc-100 border-none shadow"
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
                <a
                  href="/pdfs/Our-Company-Privacy-Policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-base font-light leading-relaxed"
                >
                  {" "}
                  <span className="underline">villkoren</span>
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
    </div>
  );
};
