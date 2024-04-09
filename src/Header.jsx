import App from "./App";
import logo from "/assets/YrgoRed.png";

export default function Header() {
  return (
    <div className="flex justify-end p-6 md:p-20 w-fit absolute right-0">
      <a href="/">
        <img src={logo} alt="Yrgo logo" onClick={App} />
      </a>
    </div>
  );
}
