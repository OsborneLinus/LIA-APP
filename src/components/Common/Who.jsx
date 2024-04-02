import { Button } from "./Button";
import React, { useState } from "react";

function Who() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const handleCompany = () => {
    console.log("I'm a company!");
    setIsCompany(!isCompany);
    setIsStudent(false);
    setIsVisible(false);
  };

  const handleStudent = () => {
    console.log("I'm a student!");
    setIsVisible(!isVisible);
    setIsStudent(!isStudent);
    setIsCompany(false);
  };

  const handleCreateAccount = () => {
    console.log("I want to create an account!");
  };

  const handleLogin = () => {
    console.log("I want to log in!");
  };

  return (
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
      <div className={isVisible ? "visible" : "hidden"}>
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
  );
}

export default Who;
