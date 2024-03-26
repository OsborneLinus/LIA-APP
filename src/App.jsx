import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Form from "./components/Form/Form.jsx";
import { Login } from "./services/login";
import supabase from "./services/supabase";
import ConfirmationPage from "./components/Form/ConfirmationPage.jsx";
import { Card } from "./components/Cards/Card.jsx";
import { CardContainer } from "./components/Cards/CardContainer.jsx";

const companies = [
  { id: 1, name: "Itiden" },
  { id: 2, name: "Raket" },
];

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      {/* <Login /> */}
      <CardContainer>
        {companies.map((company) => {
          return <Card key={company.id} companyName={company.name} />;
        })}
      </CardContainer>
    </>
  );
}
