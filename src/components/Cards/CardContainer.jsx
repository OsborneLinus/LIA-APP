import { FilterDropdown } from "./FilterDropdown";

export const CardContainer = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-end px-6">
        <FilterDropdown />
      </div>
      <div className="flex flex-col p-6 gap-6">{children}</div>
    </div>
  );
};
