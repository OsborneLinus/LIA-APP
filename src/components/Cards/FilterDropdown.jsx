import { useState } from "react";
import { CheckboxInput } from "../Form/CheckboxInput";
import CheckboxChecked from "../Form/CheckboxChecked";
import CheckboxUnchecked from "../Form/CheckboxUnchecked";

export const FilterDropdown = ({
  techFilter,
  setTechFilter,
  roleFilter,
  setRoleFilter,
}) => {
  const techStack = [
    { name: "Frontend" },
    { name: "Backend" },
    { name: "UX" },
    { name: "UI" },
    { name: "Motion" },
    { name: "Film" },
  ];
  const [showFilters, setShowFilters] = useState(false);

  const toggleDropdown = () => {
    setShowFilters(!showFilters);
  };

  const handleRoleFilterChange = (event) => {
    if (event.target.checked) {
      setRoleFilter([...roleFilter, event.target.value]);
    } else {
      const updatedFilter = roleFilter.filter((checkedFilter) => {
        return checkedFilter !== event.target.value;
      });
      setRoleFilter(updatedFilter);
    }
  };

  const handleTechFilterChange = (event) => {
    if (event.target.checked) {
      setTechFilter([...techFilter, event.target.value]);
    } else {
      const updatedFilter = techFilter.filter((checkedFilter) => {
        return checkedFilter !== event.target.value;
      });
      setTechFilter(updatedFilter);
    }
  };

  return (
    <div>
      <div className="flex justify-start">
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center py-2 text-center"
        >
          Filtrera{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g mask="url(#mask0_432_403)">
              <path
                d="M12.0001 14.7019L6.69238 9.39422L7.40008 8.68652L12.0001 13.2865L16.6001 8.68652L17.3078 9.39422L12.0001 14.7019Z"
                fill="black"
              />
            </g>
          </svg>
        </button>
      </div>
      {showFilters && (
        <div className="flex flex-col flex-wrap gap-4">
          <div className="flex flex-col gap-4">
            <p>Inriktning</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2 relative">
                <CheckboxInput
                  id="webbutveckling-checkbox"
                  value="WU"
                  onChange={handleRoleFilterChange}
                />
                <label htmlFor="webbtveckling-checkbox">Webbutveckling</label>
                <CheckboxChecked />
                <CheckboxUnchecked />
              </div>
              <div className="flex gap-2 relative">
                <CheckboxInput
                  id="design-checkbox"
                  value="DD"
                  onChange={handleRoleFilterChange}
                />
                <label htmlFor="design-checkbox">Digital design</label>
                <CheckboxChecked />
                <CheckboxUnchecked />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Teknik</p>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech) => {
                return (
                  <div key={tech.name} className="flex gap-2 relative">
                    <CheckboxInput
                      id={`${tech.name}-checkbox`}
                      value={tech.name}
                      onChange={handleTechFilterChange}
                    />
                    <label htmlFor={`${tech.name}-checkbox`}>{tech.name}</label>
                    <CheckboxChecked />
                    <CheckboxUnchecked />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
