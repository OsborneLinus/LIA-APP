import { useRef } from "react";
import YrgoArrowButton from "./components/Common/YrgoArrowButton.jsx";
import SaveTheDate from "./components/SaveTheDate.jsx";

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
        OCH {/* <br /> */}
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
        <div className="flex flex-col pt-24 justify-between md:px-20 md:pb-16 md:pt-20 md:flex-row">
          <h1 className="text-5xl font-extralight leading-[56px] p-6 md:text-[64px] md:leading-[76.80px] md:w-2/3">
            {heroText}
          </h1>
          <div className="flex self-end w-fit pt-6 pb-12 px-6 md:py-8 md:px-0">
            <YrgoArrowButton onClick={handleClick} />
          </div>
        </div>
        <SaveTheDate ref={saveTheDateRef}>
          Mingel mellan bransch och studerande Webbutvecklare och Digital
          Designers på Yrgo.
        </SaveTheDate>
      </div>
    </>
  );
}
