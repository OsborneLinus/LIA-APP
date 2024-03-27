import App from "./App";
import logo from "./assets/Yrgo.svg";

export default function Header() {
  return (
    <div className="flex justify-end p-6">
      <a href="/">
        <img src={logo} alt="Yrgo logo" onClick={App} />
      </a>
    </div>
  );
}
