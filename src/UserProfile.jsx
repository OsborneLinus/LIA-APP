import Header from "./Header";
import supabase from "./services/supabase";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "./components/Common/Button";
import { TextInput } from "./components/Form/TextInput";
import Favorites from "./components/Favorites";
import Footer from "./Footer";
import { SessionContext } from "./services/SessionContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function UserProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { session } = useContext(SessionContext);
  const user = session ? session.user.email : null;
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  useEffect(() => {
    setIsDisabled(email === user && !password);
  }, [email, password, user]);

  const handleUpdateEmail = async () => {
    if (email && email !== user) {
      const { data, error } = await supabase.auth.updateUser({ email });
      if (error) {
        setErrorMessage(error.message);
      } else {
        console.log("User updated: ", data);
        setErrorMessage("");
        window.location.reload();
      }
    }
  };

  const handleUpdatePassword = async () => {
    if (password) {
      const { data, error } = await supabase.auth.updateUser({ password });
      if (error) {
        setErrorMessage(error.message);
      } else {
        console.log("Password updated: ", data);
        setErrorMessage("");
        window.location.reload();
      }
    }
  };
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hash) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="flex flex-col">
      <Header />
      <div id="account" className="p-4 text-base font-normal">
        <h1 className="text-5xl font-bold ">KONTO</h1>
        <p className="inline-flex">
          Här kan du ändra dina kontaktupppgifter och se dina favoriter.
        </p>
      </div>
      <form className="flex flex-col gap-2">
        <div className="flex flex-col gap-4 p-4">
          {errorMessage && (
            <p className="text-red-600 font-bold border border-red-600 p-6 rounded-md ">
              {errorMessage}
            </p>
          )}
          <Button
            type="button"
            onClick={() => setShowEmailInput(!showEmailInput)}
            size="small"
          >
            KLICKA HÄR FÖR ATT ÄNDRA E-POST ADRESS
          </Button>
          {showEmailInput && (
            <div className="flex flex-col">
              <label htmlFor="email">E-POST</label>
              <TextInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="namn@foretag.com"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 p-4 pb-12">
          <Button
            type="button"
            onClick={() => setShowPasswordInput(!showPasswordInput)}
            size="small"
          >
            KLICKA HÄR FÖR ATT ÄNDRA LÖSENORD
          </Button>
          {showPasswordInput && (
            <div className="flex flex-col">
              <label htmlFor="password">LÖSENORD</label>
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          {!isEditing ? (
            <Button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setIsEditing(true);
              }}
            >
              ÄNDRA
            </Button>
          ) : (
            <>
              <Button
                type="button"
                onClick={async () => {
                  await handleUpdateEmail();
                  await handleUpdatePassword();
                }}
              >
                BEKRÄFTA
              </Button>
              <Button type="button" onClick={() => window.location.reload()}>
                AVBRYT
              </Button>
            </>
          )}
        </div>
      </form>
      <Favorites id="favorites" />
      <Footer />
    </div>
  );
}
