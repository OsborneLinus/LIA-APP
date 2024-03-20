import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Login from "./services/login";
import supabase from "./services/supabase";

export default function App() {
  return (
    <>
    <Header />
      <Hero />
    </>
  );
}
