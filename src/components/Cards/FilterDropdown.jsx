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
      <div className="flex justify-end">
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center px-4 py-2 text-center"
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
              <div className="flex gap-2 relative">
                <CheckboxInput
                  id="frontend-checkbox"
                  value="Frontend"
                  onChange={handleTechFilterChange}
                />
                <label htmlFor="frontend-checkbox">Frontend</label>
                <CheckboxChecked />
                <CheckboxUnchecked />
              </div>
              <div className="flex gap-2 relative">
                <CheckboxInput
                  id="ux-checkbox"
                  value="UX"
                  onChange={handleTechFilterChange}
                />
                <label htmlFor="ux-checkbox">UX</label>
                <CheckboxChecked />
                <CheckboxUnchecked />
              </div>
              <div className="flex gap-2 relative">
                <CheckboxInput
                  id="ui-checkbox"
                  value="UI"
                  onChange={handleTechFilterChange}
                />
                <label htmlFor="ui-checkbox">UI</label>
                <CheckboxChecked />
                <CheckboxUnchecked />
              </div>

              <div className="flex gap-2 relative">
                <CheckboxInput
                  id="backend-checkbox"
                  value="Backend"
                  onChange={handleTechFilterChange}
                />
                <label htmlFor="backend-checkbox">Backend</label>
                <CheckboxChecked />
                <CheckboxUnchecked />
              </div>
              <div className="flex gap-2 relative">
                <CheckboxInput
                  id="film-checkbox"
                  value="Film"
                  onChange={handleTechFilterChange}
                />
                <label htmlFor="film-checkbox">Film</label>
                <CheckboxChecked />
                <CheckboxUnchecked />
              </div>
              <div className="flex gap-2 relative">
                <CheckboxInput
                  id="motion-checkbox"
                  value="Motion"
                  onChange={handleTechFilterChange}
                />{" "}
                <label htmlFor="motion-checkbox">Motion</label>
                <CheckboxChecked />
                <CheckboxUnchecked />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
