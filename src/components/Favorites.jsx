import { useEffect, useState } from "react";
import supabase from "../services/supabase";
import { Card } from "./Cards/Card";
import { SessionContext } from "../services/SessionContext";
import { useContext } from "react";
import { Button } from "./Common/Button";
import { getFromAndTo } from "./Cards/CardContainer";

export default function Favorites({ id }) {
  const [favorites, setFavorites] = useState([]);
  const { session } = useContext(SessionContext);
  const user = session ? session.user.id : null;
  const [page, setPage] = useState(0);
  const [canFetchMore, setCanFetchMore] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  let ITEMS_PER_PAGE = 3;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  if (width > 1024) {
    ITEMS_PER_PAGE = 7;
  }

  useEffect(() => {
    fetchFavorites(user, page);
  }, [user]);

  async function fetchFavorites(userId, page) {
    if (!userId) {
      return;
    }
    const { from, to } = getFromAndTo(page, ITEMS_PER_PAGE);

    let query = supabase
      .from("user_company_favorites")
      .select("companyid")
      .eq("userid", userId)
      .range(from, to + 1); // fetch one extra to check if we can fetch more (if we need button)

    const { data: favoriteCompanies, error: favoriteError } = await query;

    // If we succeeded with fetching an extra we remove it again
    if (favoriteCompanies.length > ITEMS_PER_PAGE) {
      favoriteCompanies.pop();
    } else {
      // No extra found so we hide the button
      setCanFetchMore(false);
    }

    if (favoriteError) {
      console.error("Error fetching favorites: ", favoriteError);
      return;
    }

    const companyIds = favoriteCompanies.map((company) => company.companyid);

    const { data: companies, error: companyError } = await supabase
      .from("companies")
      .select("*")
      .in("id", companyIds);

    if (companyError) {
      console.error("Error fetching companies: ", companyError);
      return;
    }

    setFavorites([...favorites, ...companies]);
  }

  return (
    <>
      <div className="w-full flex justify-center mt-20">
        <div className="flex flex-col w-full max-w-[860px]">
          <div id={id} className="flex flex-col px-5 pb-4 gap-2">
            <h1 className="text-5xl font-bold">FAVORITER</h1>
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
          {canFetchMore && (
            <div className="flex justify-center mt-12">
              <Button
                onClick={() => {
                  fetchFavorites(user, page + 1);
                  setPage(page + 1);
                }}
              >
                LÄS IN FLER
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
