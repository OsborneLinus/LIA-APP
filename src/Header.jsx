import logo from './assets/Yrgo.png'

export default function Header() {
  return(
    <div className="flex justify-end p-6">
      <img src={logo} alt="Yrgo logo" />
    </div>
  );
}
