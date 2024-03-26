import { Button } from "../Common/Button";

export const Card = ({
  companyName,
  positions,
  start,
  role,
  tech,
  contact,
}) => {
  return (
    <div className="flex flex-col p-4 gap-6 bg-input-grey text-black shadow-3xl">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl">{companyName}</h2>
        </div>
        <div className="flex justify-between">
          <p>2-3 LIA platser</p>
          <span>|</span>
          <p>Nov 2024</p>
          <span>|</span>
          <p>DD & WU</p>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center flex-wrap gap-4">
          <div className="border solid border-black leading-snug px-1 py-[2px]">
            Frontend
          </div>
          <div className="border solid border-black leading-snug px-1 py-[2px]">
            Backend
          </div>
          <div className="border solid border-black leading-snug px-1 py-[2px]">
            UI
          </div>
        </div>
        <div className="self-end">
          <Button size="small">KONTAKT</Button>
        </div>
      </div>
    </div>
  );
};
