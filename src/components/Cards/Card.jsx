import FavoriteHeart from "../../../public/assets/FavoriteHeart";
import { SessionContext } from "../../services/SessionContext";
import { useContext } from "react";
import CopyEmailButton from "./CopyEmailButton";

export const Card = ({
  companyName,
  positions,
  start,
  role,
  tech,
  contact,
  companyId,
  url,
}) => {
  const roles = role.length == 2 ? `${role[0]} & ${role[1]}` : role[0];
  const { session } = useContext(SessionContext);
  const userId = session ? session.user.id : null;
  return (
    <div className="flex flex-col w-[390px] p-4 gap-6 bg-white text-black shadow rounded">
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <h2 className="text-2xl">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {companyName}
              </a>
            </h2>
            <FavoriteHeart companyId={companyId} userId={userId} />
          </div>
        </div>
        <div className="flex justify-between">
          <p>{positions} platser</p>
          <span>|</span>
          <p>{start}</p>
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
          <CopyEmailButton size="small" type="button" contact={contact} />
        </div>
      </div>
    </div>
  );
};
