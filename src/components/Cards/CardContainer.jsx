import { useState, useEffect } from "react";
import supabase from "../../services/supabase";
import { Card } from "./Card";
import { FilterDropdown } from "./FilterDropdown";
import { Button } from "../Common/Button";

export const getFromAndTo = (page, itemsPerPage) => {
  let from = page * itemsPerPage;
  let to = from + itemsPerPage;

  // Offsetting so we don't get last card again
  if (page > 0) {
    from += 1;
  }

  return { from, to };
};

export const CardContainer = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [roleFilter, setRoleFilter] = useState([]);
  const [techFilter, setTechFilter] = useState([]);
  const [page, setPage] = useState(0);
  const [canFetchMore, setCanFetchMore] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  let ITEM_PER_PAGE = 3;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  if (width > 1024) {
    ITEM_PER_PAGE = 7;
  }

  // This effect is run when new filter is selected
  useEffect(() => {
    // We reset the page to 0 because we wanna start with new cards when you update filters
    setPage(0);
    getCompanies(true, 0);
  }, [roleFilter, techFilter]);

  async function getCompanies(newFiltering, page) {
    // Show the fetch more button again when new filters applies
    if (newFiltering) {
      setCanFetchMore(true);
    }

    const { from, to } = getFromAndTo(page, ITEM_PER_PAGE);

    let query = supabase
      .from("companies")
      .select()
      .range(from, to + 1); // fetch one extra to check if we can fetch more (if we need button)

    // Apply role filtering only if a role filter is chosen
    if (roleFilter.length > 0) {
      query = query.overlaps("role", roleFilter);
    }

    // Apply tech filtering only if a tech filter is chosen
    if (techFilter.length > 0) {
      query = query.overlaps("tech", techFilter);
    }

    const { data } = await query;

    // If we succeeded with fetching an extra we remove it again
    if (data.length > ITEM_PER_PAGE) {
      data.pop();
    } else {
      // No extra found so we hide the button
      setCanFetchMore(false);
    }

    // Overwrite existing companies array with new data when we fetch with updated filters
    if (newFiltering) {
      setCompanies(data);
    } else {
      // Merge existing and incoming companies on a fetch more
      setCompanies([...companies, ...data]);
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full max-w-[860px]">
        <h2 className="px-6 md:px-0 mt-14 text-3xl font-semibold text-yrgo-red">
          VILKA KOMMER?
        </h2>
        <div className="flex justify-start px-6 pt-6 md:px-0">
          <FilterDropdown
            techFilter={techFilter}
            setTechFilter={setTechFilter}
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
          />
        </div>
        <div className="flex flex-wrap justify-center md:justify-between p-6 md:px-0 gap-6">
          {companies.map((company) => {
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
                getCompanies(false, page + 1);
                setPage(page + 1);
              }}
            >
              LÄS IN FLER
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
