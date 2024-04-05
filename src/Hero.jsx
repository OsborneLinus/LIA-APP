import YrgoArrowButton from "./components/Common/YrgoArrowButton.jsx";
import SaveTheDate from "./components/SaveTheDate.jsx";
import { useRef } from "react";

export default function Hero({ session }) {
  const isLoggedIn = session && session.user !== null;
  const saveTheDateRef = useRef();

  const handleClick = () => {
    saveTheDateRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const defaultText = (
    <>
      KOM OCH
      <br />
      <b className="font-bold">
        MÖT
        <br />
        FRAMTIDENS
      </b>
      <br />
      DIGITALA
      <br />
      <b className="font-bold">
        DESIGNERS
        <br />
        OCH
        <br />
        UTVECKLARE
      </b>
    </>
  );

  const studentText = (
    <>
      KOM OCH
      <br />
      <b className="font-bold">
        MÖT
        <br />
        DIN
      </b>{" "}
      FRAMTIDA
      <br />
      <b className="font-bold">LIA-PLATS</b>
    </>
  );
  const heroText = isLoggedIn ? studentText : defaultText;

  return (
    <>
      <div>
        <h1 className="text-5xl font-extralight leading-[56px] p-6">
          {heroText}
        </h1>
        <div className="flex justify-end mt-12 mb-6 p-6">
          <YrgoArrowButton onClick={handleClick} />
        </div>
        <SaveTheDate ref={saveTheDateRef}>
          Mingel mellan bransch och studerande Webbutvecklare och Digital
          Designers på Yrgo.
        </SaveTheDate>
      </div>
    </>
  );
}
