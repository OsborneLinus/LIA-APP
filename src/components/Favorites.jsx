import { useEffect, useState } from "react";
import supabase from "../services/supabase";
import { Card } from "./Cards/Card";
import { SessionContext } from "../services/SessionContext";
import { useContext } from "react";

export default function Favorites({ id }) {
  const [favorites, setFavorites] = useState([]);
  const { session } = useContext(SessionContext);
  const user = session ? session.user.id : null;

  useEffect(() => {
    if (user) {
      async function fetchFavorites() {
        const { data: favoriteCompanies, error: favoriteError } = await supabase
          .from("user_company_favorites")
          .select("companyid")
          .eq("userid", user);

        if (favoriteError) {
          console.error("Error fetching favorites: ", favoriteError);
          return;
        }

        const companyIds = favoriteCompanies.map(
          (company) => company.companyid
        );

        const { data: companies, error: companyError } = await supabase
          .from("companies")
          .select("*")
          .in("id", companyIds);

        if (companyError) {
          console.error("Error fetching companies: ", companyError);
          return;
        }

        setFavorites(companies);
      }

      fetchFavorites();
    }
  }, [user]);
  return (
    <>
      <div id={id} className="p-4 pl-5 pb-12 gap-2 text-base font-normal">
        <h1 className="text-5xl font-bold ">FAVORITER</h1>
        <p className="inline-flex">De företag du är intresserad utav </p>
      </div>
      <div className="flex flex-col p-6 gap-6">
        {favorites.map((company) => (
          <Card
            key={company.id}
            companyId={company.id}
            companyName={company.name}
            positions={company.position}
            role={company.role}
            tech={company.tech}
            contact={company.contact}
          />
        ))}
      </div>
    </>
  );
}
