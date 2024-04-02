import { useState } from "react";
import { TextInput } from "../components/Form/TextInput";
import logo from "/assets/YrgoRed.png";
import App from "../App";
import { Button } from "../components/Common/Button";
import supabase from "./supabase";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error("Error logging in:", error.message);
    else console.log("Data inserted successfully");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end p-4">
        <a className="" href="/">
          <img src={logo} alt="Yrgo logo" onClick={App} />
        </a>
      </div>
      <form className="flex flex-col gap-2" onSubmit={handleLogin}>
        <div className="p-4">
          <h1 className="text-5xl font-bold ">LOGGA IN</h1>
          <p className="inline-flex">Har du inte ett konto?</p>
          <button className="underline p-2" href="">
            Skapa ett här!
          </button>
        </div>
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
        <div className="flex justify-center">
          <Button type="submit">LOGGA IN</Button>
        </div>
      </form>
      <div className="flex items-center justify-center flex-grow py-12">
        <div className="w-56 text-center flex flex-col">
          <a
            href="/"
            className="text-black text-base font-light leading-relaxed"
          >
            <span className="underline">Läs mer</span> om hur vi hanterar dina
            personliga uppgifter
          </a>
        </div>
      </div>
    </div>
  );
};
