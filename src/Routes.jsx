import { Routes, Route } from "react-router-dom";
import { SignupForm } from "./services/SignUp";
import supabase from "./services/supabase";
import Who from "./components/Common/Who";
import { LoginForm } from "./services/login";
import { useContext } from "react";
import { SessionContext } from "./services/SessionContext";
import { Button } from "./components/Common/Button";
import { Card } from "./components/Cards/Card";
import Header from "./Header";
import Hero from "./Hero";
import What from "./components/Common/What";
import Form from "./components/Form/Form";
import Footer from "./Footer";
import { CardContainer } from "./components/Cards/CardContainer";

function AppRoutes() {
  const { session, isLoggedIn } = useContext(SessionContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero session={session} />
            <What />

            {isLoggedIn ? (
              <>
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
                <CardContainer />
              </>
            ) : (
              <>
                <Who />
              </>
            )}
            <Footer />
          </>
        }
      />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default AppRoutes;
