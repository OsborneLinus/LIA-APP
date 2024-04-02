import { useState, useEffect } from "react";
import supabase from "../../services/supabase";
import { Card } from "./Card";
import { FilterDropdown } from "./FilterDropdown";

export const CardContainer = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    const { data } = await supabase.from("companies").select();
    setCompanies(data);
  }

  const filteredCompanies = companies.filter((company) => {
    // When no filter is choosen, show all companies
    if (filter.length === 0) {
      return true;
    }

    const hasRoleFilter = company.role.some((roleTag) =>
      filter.includes(roleTag)
    );
    const hasTechFilter = company.tech.some((techTag) =>
      filter.includes(techTag)
    );

    return hasRoleFilter || hasTechFilter;
  });

  return (
    <div className="flex flex-col ">
      <div className="flex justify-end px-6">
        <FilterDropdown filter={filter} setFilter={setFilter} />
      </div>
      <div className="flex flex-col p-6 gap-6">
        {filteredCompanies.map((company) => {
          return (
            <Card
              key={company.id}
              companyId={company.id}
              companyName={company.name}
              positions={company.position}
              role={company.role}
              tech={company.tech}
              contact={company.contact}
            />
          );
        })}
      </div>
    </div>
  );
};
