import { useState, useEffect } from "react";
import supabase from "../../services/supabase";
import { Card } from "./Card";
import { FilterDropdown } from "./FilterDropdown";

export const CardContainer = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [roleFilter, setRoleFilter] = useState([]);
  const [techFilter, setTechFilter] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    const { data } = await supabase.from("companies").select();
    setCompanies(data);
  }

  const roleFilteredCompanies = companies.filter((company) => {
    // When no filter is choosen, show all companies
    if (roleFilter.length === 0) {
      return true;
    }

    const hasRoleFilter = company.role.some((roleTag) =>
      roleFilter.includes(roleTag)
    );

    return hasRoleFilter;
  });

  const fullyFilteredCompanies = roleFilteredCompanies.filter((company) => {
    // When no filter is choosen, show all companies
    if (techFilter.length === 0) {
      return true;
    }

    const hasTechFilter = company.tech.some((techTag) =>
      techFilter.includes(techTag)
    );
    return hasTechFilter;
  });

  return (
    <div className="flex flex-col ">
      <div className="flex justify-end px-6">
        <FilterDropdown
          techFilter={techFilter}
          setTechFilter={setTechFilter}
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
        />
      </div>
      <div className="flex flex-col p-6 gap-6">
        {fullyFilteredCompanies.map((company) => {
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
