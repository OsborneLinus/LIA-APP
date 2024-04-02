import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Form from "./components/Form/Form.jsx";
import supabase from "./services/supabase";
import { useState, useEffect } from "react";
import ConfirmationPage from "./components/Form/ConfirmationPage.jsx";
import { Card } from "./components/Cards/Card.jsx";
import { CardContainer } from "./components/Cards/CardContainer.jsx";
import { SignupForm } from "./services/SignUp.jsx";
import { LoginForm } from "./services/login.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Hero view="company" />
      <Form />
      {/* <LoginForm />
      <SignupForm /> */}
      <CardContainer />
      <Footer />
    </>
  );
}
