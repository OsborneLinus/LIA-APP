import React, { createContext, useState, useEffect } from "react";
import supabase from "../services/supabase";

export const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [session, setSession] = useState(null);
  const [companies, setCompanies] = useState([]);

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

  return (
    <SessionContext.Provider value={{ session, isLoggedIn, companies }}>
      {children}
    </SessionContext.Provider>
  );
}
