import App from "./App";
import logo from "/assets/YrgoRed.png";
import RightArrow from "../public/assets/SidoPil.svg?react";

export default function Footer() {
  return (
    <div className="border-t border-black">
      <div className="inline-flex">
        <a className="px-8 pt-8" href="/">
          <img src={logo} alt="Yrgo logo" onClick={App} />
        </a>
      </div>
      <div className="inline-flex items-center p-6 gap-12">
        <div className="inline-flex">
          <p>KONTAKT</p>
          <RightArrow />
        </div>
        <div>
          <p>YRGO 2024</p>
        </div>
      </div>
    </div>
  );
}
