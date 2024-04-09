import { forwardRef } from "react";

const SaveTheDate = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="flex gap-3.5 bg-night-sky-blue font-normal items-center justify-center text-zinc-100 p-6 md:gap-12"
    >
      <div className="basis-1/12 max-w-[54px] text-2xl md:text-[40px] md:leading-[48px] md:font-semibold">
        24 04 24
      </div>
      <div className="basis-1/12 max-w-[105px] text-2xl md:text-[40px] md:leading-[48px] md:font-semibold">
        SAVE THE DATE
      </div>
      <div className="basis-9/12 max-w-[217px] text-base md:text-lg font-light leading-1.75">
        {children}
      </div>
    </div>
  );
});

export default SaveTheDate;
