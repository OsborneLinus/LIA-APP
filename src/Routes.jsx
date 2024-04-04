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
