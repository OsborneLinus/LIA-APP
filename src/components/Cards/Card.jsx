import Heart from "../../../public/assets/Heart";
import { Button } from "../Common/Button";

export const Card = ({
  companyName,
  positions,
  start,
  role,
  tech,
  contact,
}) => {
  const roles = role.length == 2 ? `${role[0]} & ${role[1]}` : role[0];
  return (
    <div className="flex flex-col p-4 gap-6 bg-input-grey text-black shadow-3xl">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-2xl">{companyName}</h2>
          <Heart />
        </div>
        <div className="flex justify-between">
          <p>{positions} LIA platser</p>
          <span>|</span>
          <p>Nov 2024</p>
          <span>|</span>
          <p>{roles}</p>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center flex-wrap gap-4">
          {tech.map((techItem) => {
            return (
              <div
                key={techItem}
                className="border solid border-black leading-snug px-1 py-[2px]"
              >
                {techItem}
              </div>
            );
          })}
        </div>
        <div className="self-end">
          <Button size="small">{contact}</Button>
        </div>
      </div>
    </div>
  );
};
