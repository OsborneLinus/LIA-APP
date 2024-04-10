import { SignupForm } from "../../services/SignUp";
import { Button } from "./Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useRef } from "react";
import { LoginForm } from "../../services/login";

function Who() {
  const navigate = useNavigate();
  const [isCompany, setIsCompany] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const whoRef = useRef();
  const studentRef = useRef();

  const handleCompany = () => {
    setIsCompany(!isCompany);
    setIsStudent(false);
    setTimeout(() => {
      whoRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const handleStudent = () => {
    setIsStudent(!isStudent);
    setIsCompany(false);
    setTimeout(() => {
      studentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const handleCreateAccount = () => {
    setShowSignup(true);
  };

  const closeCreateAccount = () => {
    setShowSignup(false);
  };

  const handleLogin = () => {
    setShowLoginPopup(true);
  };
  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      <div ref={whoRef} className="p-5 md:w-[612px] md:px-0">
        <h2 className="text-3xl font-semibold text-yrgo-red">VEM ÄR DU?</h2>
        <div className="flex my-8 flex-wrap justify-between md:gap-x-12">
          <Button
            type="button"
            size="who"
            onClick={handleCompany}
            background={isStudent ? "asphalt-grey" : undefined}
          >
            FÖRETAG
          </Button>
          <Button
            type="button"
            size="who"
            onClick={handleStudent}
            background={isCompany ? "asphalt-grey" : undefined}
          >
            STUDENT
          </Button>
        </div>
        <div ref={studentRef} className={isStudent ? "visible" : "hidden"}>
          <p className="text-lg">
            Som student kan du skapa ett konto för att kunna se och kontakta
            företagen som kommer vara på plats. Du kan komma utan konto.
          </p>
          <div className="flex my-8 flex-wrap justify-between md:gap-x-12">
            <Button type="submit" size="who" onClick={handleCreateAccount}>
              SKAPA KONTO
            </Button>
            {showSignup && <SignupForm onClose={closeCreateAccount} />}
            <Button
              type="button"
              size="who"
              background="transparent"
              textColor="black"
              onClick={handleLogin}
            >
              LOGGA IN
            </Button>
            {showLoginPopup && <LoginForm onClose={closeLoginPopup} />}
          </div>
        </div>
      </div>
      <div className={isCompany ? "visible" : "hidden"}>
        <Form />
      </div>
    </>
  );
}

export default Who;
