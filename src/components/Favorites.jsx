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
      <div className="w-full flex justify-center mt-20">
        <div className="flex flex-col w-full max-w-[860px]">
          <div id={id} className="flex flex-col px-5 pb-4 gap-2">
            <h1 className="text-5xl font-bold">FAVORITER</h1>
            <p>De företag du är intresserad utav </p>
          </div>
          <div className="flex flex-wrap p-6 gap-6">
            {favorites.map((company) => {
              return (
                <Card
                  key={company.id}
                  companyId={company.id}
                  companyName={company.name}
                  positions={company.position}
                  role={company.role}
                  tech={company.tech}
                  contact={company.contact}
                  start={company.month}
                  url={company.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
