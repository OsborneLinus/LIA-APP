import YrgoArrowButton from "./components/YrgoArrowButton.jsx";
import SaveTheDate from "./components/SaveTheDate.jsx";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <h1 className="text-5xl font-extralight font p-6">
          KOM OCH <b className="font-bold">MÖT FRAMTIDENS</b> DIGITALA{" "}
          <b className="font-bold">DESIGNERS OCH UTVECKLARE</b>
        </h1>
        <div className="flex justify-end mt-12 mb-6 p-6">
          <YrgoArrowButton />
        </div>
        <SaveTheDate>
          Mingel mellan bransch och studerande Webbutvecklare och Digital
          Designers på Yrgo
        </SaveTheDate>
      </div>
    </>
  );
}
