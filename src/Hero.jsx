import YrgoArrowButton from "./components/Common/YrgoArrowButton.jsx";
import SaveTheDate from "./components/SaveTheDate.jsx";

export default function Hero({ view }) {
  const defaultText = (
    <>
      KOM OCH <b className="font-bold">MÖT FRAMTIDENS</b> DIGITALA
      <br />
      <b className="font-bold">DESIGNERS OCH UTVECKLARE</b>
    </>
  );

  const studentText = (
    <>
      KOM OCH <b className="font-bold">MÖT DIN</b> FRAMTIDA
      <br />
      <b className="font-bold">LIA-PLATS</b>
    </>
  );

  const heroText = view === "student" ? studentText : defaultText;

  return (
    <>
      <div>
        <h1 className="text-5xl font-extralight font p-6">{heroText}</h1>
        <div className="flex justify-end mt-12 mb-6 p-6">
          <YrgoArrowButton />
        </div>
        <SaveTheDate>
          Mingel mellan bransch och studerande Webbutvecklare och Digital
          Designers på Yrgo.
        </SaveTheDate>
      </div>
    </>
  );
}
