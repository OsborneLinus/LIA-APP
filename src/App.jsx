import Hero from "./Kebab.jsx";
import Header from "./Header.jsx";
import Form from "./components/Form/Form.jsx";
import Login from "./services/login";
import supabase from "./services/supabase";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
    </>
  );
}
