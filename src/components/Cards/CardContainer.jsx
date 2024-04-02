import { useState, useEffect } from "react";
import supabase from "../../services/supabase";
import { Card } from "./Card";
import { FilterDropdown } from "./FilterDropdown";

export const CardContainer = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    const { data } = await supabase.from("companies").select();
    setCompanies(data);
  }

  return (
    <div className="flex flex-col ">
      <div className="flex justify-end px-6">
        <FilterDropdown />
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
