import App from "./App";
import logo from "/assets/YrgoRed.png";
import RightArrow from "../public/assets/SidoPil.svg?react";
import FavoriteHeart from "../public/assets/FavoriteHeart.svg?react";
import AccountLogo from "../public/assets/AccountLogo.svg?react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "./services/SessionContext";

export default function Footer() {
  const { isLoggedIn } = useContext(SessionContext);
  return (
    <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-center content-center pt-20">
      <div className="row-span-2 ">
        <a className="px-8 pt-8" href="/">
          <img src={logo} alt="Yrgo logo" onClick={App} />
        </a>
      </div>
      {isLoggedIn && (
        <>
          <div className="col-start-2 row-start-1 pt-4">
            <div className="inline-flex">
              <FavoriteHeart />
              <Link
                className="ml-2"
                to={{
                  pathname: "/userprofile",
                  hash: "favorites",
                  state: { targetId: "favorites" },
                }}
              >
                Favoriter
              </Link>
            </div>
          </div>
          <div className="col-start-3 row-start-1 pt-4">
            <div className="inline-flex">
              <AccountLogo />
              <Link
                className="ml-2"
                to={{
                  pathname: "/userprofile",
                  hash: "account",
                  state: { targetId: "account" },
                }}
              >
                Konto
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="col-start-3 row-start-2 inline-flex">
        <p>KONTAKT</p>
        <RightArrow />
      </div>
      <div className="col-start-2 row-start-2">
        <p>YRGO 2024</p>
      </div>
    </div>
  );
}
