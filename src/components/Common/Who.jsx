import { SignupForm } from "../../services/SignUp";
import { Button } from "./Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";

function Who() {
  const navigate = useNavigate();
  const [isCompany, setIsCompany] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const handleCompany = () => {
    console.log("I'm a company!");
    setIsCompany(!isCompany);
    setIsStudent(false);
  };

  const handleStudent = () => {
    console.log("I'm a student!");
    setIsStudent(!isStudent);
    setIsCompany(false);
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-yrgo-red">VEM ÄR DU?</h2>
        <div className="flex gap-8 my-8 flex-wrap">
          <Button
            type="button"
            size="large"
            onClick={handleCompany}
            background={isStudent ? "asphalt-grey" : undefined}
          >
            FÖRETAG
          </Button>
          <Button
            type="button"
            size="large"
            onClick={handleStudent}
            background={isCompany ? "asphalt-grey" : undefined}
          >
            STUDENT
          </Button>
        </div>
        <div className={isStudent ? "visible" : "hidden"}>
          <p>
            Som student kan du skapa ett konto för att kunna se och kontakta
            företagen som kommer vara på plats. Du kan komma utan konto.
          </p>
          <div className="flex gap-8 my-8 flex-wrap">
            <Button type="submit" size="large" onClick={handleCreateAccount}>
              SKAPA KONTO
            </Button>
            <Button
              type="submit"
              size="large"
              background="transparent"
              textColor="black"
              onClick={handleLogin}
            >
              LOGGA IN
            </Button>
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
