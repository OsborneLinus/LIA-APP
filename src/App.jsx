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
import What from "./components/Common/What.jsx";
import Who from "./components/Common/Who.jsx";

export default function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    const { data } = await supabase.from("companies").select();
    setCompanies(data);
  }

  return (
    <>
      <Header />
      <Hero view="company" />
      <What />
      <Who />
      <Form />
      {/* <LoginForm />
      <SignupForm /> */}
      <CardContainer>
        {companies.map((company) => {
          return (
            <Card
              key={company.id}
              companyId={company.id}
              companyName={company.name}
              positions={company.position}
              role={company.role}
              tech={company.tech}
              contact={company.contact}
            />
          );
        })}
      </CardContainer>
      <Footer />
    </>
  );
}
