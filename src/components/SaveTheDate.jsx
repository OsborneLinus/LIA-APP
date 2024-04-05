import { forwardRef } from "react";

const SaveTheDate = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="p-6 flex gap-3.5 bg-night-sky-blue font-normal text-zinc-100"
    >
      <div className="basis-1/12 text-2xl">24 04 24</div>
      <div className="basis-2/12 text-2xl">SAVE THE DATE</div>
      <div className="basis-9/12 text-base leading-1.75">{children}</div>
    </div>
  );
});

export default SaveTheDate;
