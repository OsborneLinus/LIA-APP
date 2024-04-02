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
import { Button } from "./components/Common/Button.jsx";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const isLoggedIn = session && session.user;

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
      <Hero session={session} />
      {isLoggedIn ? (
        <CardContainer>
          <Button
            type="button"
            size="large"
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) console.error("Error signing out");
            }}
          >
            Logga ut
          </Button>
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
      ) : (
        <Form />
      )}
      <Footer />
    </>
  );
}
