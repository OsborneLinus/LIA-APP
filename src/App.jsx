import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Form from "./components/Form/Form.jsx";
import { LoginForm } from "./services/Login.jsx";
import supabase from "./services/supabase";
import ConfirmationPage from "./components/Form/ConfirmationPage.jsx";

export default function App() {
  return (
    <>
      {/*       <Header />
      <Hero />
      <Form /> */}
      <LoginForm />
    </>
  );
}
