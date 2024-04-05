import { Routes, Route } from "react-router-dom";
import { SignupForm } from "./services/SignUp";
import supabase from "./services/supabase";
import Who from "./components/Common/Who";
import { LoginForm } from "./services/login";
import { useContext } from "react";
import { SessionContext } from "./services/SessionContext";
import { Button } from "./components/Common/Button";
import Header from "./Header";
import Hero from "./Hero";
import What from "./components/Common/What";
import Footer from "./Footer";
import { CardContainer } from "./components/Cards/CardContainer";
import UserProfile from "./UserProfile";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToAnchor() {
  const { hash } = useLocation();
  const idRef = useRef(null);
  const attempts = useRef(0);

  useEffect(() => {
    if (hash) {
      idRef.current = hash.replace("#", "");

      const checkElementExistence = () => {
        const element = document.getElementById(idRef.current);
        if (element || attempts.current > 50) {
          // stop checking after 50 attempts
          if (element) {
            console.log(element);
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          attempts.current++;
          setTimeout(checkElementExistence, 100); // check again after 100 milliseconds
        }
      };

      setTimeout(checkElementExistence, 100); // initial call after 100 milliseconds
    }
  }, [hash]);

  return null;
}

export function AppRoutes() {
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
                <div className="ml-6">
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
                </div>
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
      <Route path="/userprofile" element={<UserProfile />} />
    </Routes>
  );
}

export default AppRoutes;
