import App from "./App";
import logo from "./assets/Yrgo.svg";

export default function Header() {
  return (
    <div className="flex justify-end p-6">
      {/* h-[20vh] */}
      <a href="/">
        <img src={logo} alt="Yrgo logo" onClick={App} />
      </a>
    </div>
  );
}
