import Hero from "./Kebab.jsx";
import Header from "./Header.jsx";
import Form from "./components/Form.jsx";
import Login from "./services/login";
import supabase from "./services/supabase";
import ConfirmationPage from "./components/Form/ConfirmationPage.jsx";

export default function App() {
  return (
    <>
      {/*       <Header />
      <Hero />
      <Form /> */}
      <ConfirmationPage />
    </>
  );
}
