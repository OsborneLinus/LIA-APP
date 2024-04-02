import { useState } from "react";
import { TextInput } from "../components/Form/TextInput";
import logo from "/assets/YrgoRed.png";
import App from "../App";
import { Button } from "../components/Common/Button";
import supabase from "../services/supabase";
import CheckedSVG from "../../public/assets/check.svg?react";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) console.error("Error signing up:", error.message);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end p-8">
        <a className="" href="/">
          <img src={logo} alt="Yrgo logo" onClick={App} />
        </a>
      </div>
      <div className="pl-5 pb-12 flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-zinc-800 text-5xl font-bold leading-[57px]">
          SKAPA KONTO
        </div>
        <div className="w-[347px] text-base font-normal leading-snug">
          Som student kan du skapa ett konto för att ta del av vilka företag som
          kommer vara på plats under minglet och deras kontaktinformation.{" "}
        </div>
      </div>
      <form className="flex flex-col gap-2" onSubmit={handleSignUp}>
        <div className="flex flex-col gap-4 p-4">
          <label htmlFor="email">E-POST</label>
          <TextInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="namn@foretag.com"
          />
        </div>
        <div className="flex flex-col gap-4 p-4 pb-12">
          <label htmlFor="password">LÖSENORD</label>
          <TextInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
          />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label htmlFor="policy" className="flex items-center pb-12">
            <div
              className={`border-2 ${isChecked ? "" : ""} m-2`}
              onClick={handleInputChange}
              style={{ width: "20px", height: "20px", position: "relative" }}
            >
              {isChecked && (
                <CheckedSVG
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "100%",
                  }}
                />
              )}{" "}
            </div>
            Jag godkänner{" "}
            <a className="underline pl-1" href="/">
              villkoren
            </a>
          </label>
          <input
            className="sr-only"
            id="policy"
            type="checkbox"
            required
            checked={isChecked}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center">
          <Button type="submit">SKAPA KONTO</Button>
        </div>
      </form>
    </div>
  );
};
