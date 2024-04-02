import { useState } from "react";
import { CheckboxInput } from "../Form/CheckboxInput";
import CheckboxChecked from "../../assets/CheckboxChecked";
import CheckboxUnchecked from "../Form/CheckboxUnchecked";

export const FilterDropdown = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [tech, setTech] = useState([]);
  const [filter, setFilter] = useState("");

  const toggleDropdown = () => {
    setShowFilters(!showFilters);
  };

  const handleTechChange = (event) => {
    if (event.target.checked) {
      setTech((prevTech) => [...prevTech, event.target.value]);
    } else {
      setTech((prevTech) =>
        prevTech.filter((value) => value !== event.target.value)
      );
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
        <div className="flex flex-wrap gap-4 py-2 px-4">
          <div className="flex gap-2 relative">
            <CheckboxInput
              id="webbutveckling-checkbox"
              value="Webbutveckling"
              onChange={handleTechChange}
            />
            <label htmlFor="webbtveckling-checkbox">Webbutveckling</label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>
          <div className="flex gap-2 relative">
            <CheckboxInput
              id="design-checkbox"
              value="Design"
              onChange={handleTechChange}
            />
            <label htmlFor="design-checkbox">Digital design</label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>
          <div className="flex gap-2 relative">
            <CheckboxInput
              id="frontend-checkbox"
              value="Frontend"
              onChange={handleTechChange}
            />
            <label htmlFor="frontend-checkbox">Frontend</label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>
          <div className="flex gap-2 relative">
            <CheckboxInput
              id="ux-checkbox"
              value="UX"
              onChange={handleTechChange}
            />
            <label htmlFor="ux-checkbox">UX</label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>
          <div className="flex gap-2 relative">
            <CheckboxInput
              id="ui-checkbox"
              value="UI"
              onChange={handleTechChange}
            />
            <label htmlFor="ui-checkbox">UI</label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>

          <div className="flex gap-2 relative">
            <CheckboxInput
              id="backend-checkbox"
              value="Backend"
              onChange={handleTechChange}
            />
            <label htmlFor="backend-checkbox">Backend</label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>
          <div className="flex gap-2 relative">
            <CheckboxInput
              id="film-checkbox"
              value="Film"
              onChange={handleTechChange}
            />
            <label htmlFor="film-checkbox">Film</label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>
          <div className="flex gap-2 relative">
            <CheckboxInput
              id="motion-checkbox"
              value="Motion"
              onChange={handleTechChange}
            />{" "}
            <label htmlFor="motion-checkbox">Motion</label>
            <CheckboxChecked />
            <CheckboxUnchecked />
          </div>
        </div>
      )}
    </div>
  );
};
