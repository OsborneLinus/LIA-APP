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
  }, [roleFilter, techFilter]);

  async function getCompanies() {
    let query = supabase.from("companies").select();

    // Apply role filtering only if a role filter is chosen
    if (roleFilter.length > 0) {
      query = query.overlaps("role", roleFilter);
    }

    // Apply tech filtering only if a tech filter is chosen
    if (techFilter.length > 0) {
      query = query.overlaps("tech", techFilter);
    }

    const { data } = await query;
    setCompanies(data);
  }

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
            />
          );
        })}
      </div>
    </div>
  );
};
