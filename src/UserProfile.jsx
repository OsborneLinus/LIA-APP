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
import { useNavigate } from "react-router-dom";
import BackArrowButton from "./components/Common/BackArrowButton";
import SaveConfirm from "./components/SaveConfirm";

export default function UserProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { session } = useContext(SessionContext);
  const user = session ? session.user.email : null;
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmEdit, setShowConfirmEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsDisabled(email === user && !password);
  }, [email, password, user]);

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
    <div className="flex flex-col w-full">
      <div className="w-fit absolute px-5 pt-12">
        <BackArrowButton onClick={() => navigate(-1)} />
      </div>
      <Header />
      <div className="flex flex-col w-full items-center">
        <div
          id="account"
          className="flex flex-col justify-center pt-36 px-5 gap-8 md:px-0 md:w-[860px]"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold ">KONTO</h1>
            <p>
              Här kan du ändra dina kontaktupppgifter och se dina favoriter.
            </p>
          </div>
          {errorMessage && (
            <p className="text-red-600 font-bold border border-red-600 p-6 rounded-md ">
              {errorMessage}
            </p>
          )}
          <div className="flex flex-col items-center justify-between md:flex-row">
            <form className="flex flex-col md:flex-row gap-2 items-center md:items-start justify-center h-fit pb-0 md:gap-12">
              <div className="flex flex-col gap-4 py-4">
                <Button
                  type="button"
                  size="account"
                  onClick={() => {
                    setShowEmailInput(!showEmailInput);
                    setIsEditing(!showEmailInput);
                    setShowPasswordInput(false);
                  }}
                >
                  ÄNDRA E-POSTADRESS
                </Button>
                {showEmailInput && (
                  <>
                    <div className="flex flex-col">
                      <label htmlFor="email">E-POST</label>
                      <TextInput
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="namn@foretag.com"
                      />
                    </div>
                    <SaveConfirm
                      user={user}
                      password={password}
                      email={email}
                      isEditing={isEditing}
                      showConfirmEdit={showConfirmEdit}
                      setShowConfirmEdit={setShowConfirmEdit}
                      setErrorMessage={setErrorMessage}
                    />
                  </>
                )}
              </div>
              <div className="flex flex-col gap-4 py-4">
                <Button
                  type="button"
                  size="account"
                  onClick={() => {
                    setShowPasswordInput(!showPasswordInput);
                    setIsEditing(!showPasswordInput);
                    setShowEmailInput(false);
                  }}
                >
                  ÄNDRA LÖSENORD
                </Button>
                {showPasswordInput && (
                  <>
                    <div className="flex flex-col">
                      <label htmlFor="password">LÖSENORD</label>
                      <TextInput
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        placeholder="******"
                      />
                    </div>
                    <SaveConfirm
                      user={user}
                      password={password}
                      email={email}
                      isEditing={isEditing}
                      showConfirmEdit={showConfirmEdit}
                      setShowConfirmEdit={setShowConfirmEdit}
                      setErrorMessage={setErrorMessage}
                    />
                  </>
                )}
              </div>
            </form>
            <div className="flex justify-start item-center md:items-start">
              <Button
                type="button"
                size="account"
                textColor="black"
                background="transparent"
                onClick={async () => {
                  const { error } = await supabase.auth.signOut();
                  if (error) {
                    console.error("Error signing out");
                  } else {
                    navigate("/"); // Redirect to the home page
                  }
                }}
              >
                LOGGA UT
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Favorites id="favorites" />
      <Footer />
    </div>
  );
}
