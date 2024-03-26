import { useState, useEffect } from "react";
import { TextInput } from "../components/Form/TextInput";
import supabase from "../services/supabase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) console.error("Error logging in:", error.message);
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) console.error("Error logging in:", error.message);
  };

  if (session) {
    return <button onClick={() => supabase.auth.signOut()}>Log out</button>;
  }

  return (
    <div className="flex flex-col justify-center p-12">
      <form onSubmit={handleLogin}>
        <h2>Log in</h2>
        <TextInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <TextInput
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Log in</button>
      </form>
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Cancel" : "Sign Up"}
      </button>
      {showSignUp && (
        <form onSubmit={handleSignUp}>
          <h2>Sign up</h2>
          <TextInput
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <TextInput
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Sign up</button>
        </form>
      )}
    </div>
  );
};
