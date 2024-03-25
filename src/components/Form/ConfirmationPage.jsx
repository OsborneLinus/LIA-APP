import AnimationHeartSkull from "../Animations/AnimationHeartSkull";

export default function ConfirmationPage() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-between p-12">
        <AnimationHeartSkull />
        <img src="src/assets/YrgoRed.png" />
      </div>
      <div className="pt-10 pb-20 pl-10">
        <p className="w-3/4 text-6xl font-extralight">
          TACK FÖR ANMÄLAN <span className="font-semibold">VI SES!</span>
        </p>
      </div>
      <div>
        <div className="flex flex-col items-center py-10 px-10 bg-black text-badboy-gray text-xl">
          <div className="flex gap-20 pb-10">
            <div className="content-center">
              <img className="mb-6" src="src/assets/EventNote.svg" alt="" />
              <p>24</p>
              <p>04</p>
              <p>24</p>
            </div>
            <div>
              <img className="mb-6" src="src/assets/Schedule.svg" alt="" />
              <p>15:00</p>
              <p>-</p>
              <p>17:00</p>
            </div>
            <div>
              <img className="mb-6" src="src/assets/LocationOn.svg" alt="" />
              <p>VISUAL</p> <p>ARENA</p>
            </div>
          </div>
          <div className="font-extralight text-sm w-full text-end">
            <p>Lindholmspiren 3-5</p>
          </div>
        </div>
      </div>
      <div className="flex flex-grow justify-center items-center ">
        <div>
          <button className="bg-black text-white text-xl py-2 px-4">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240325T091500Z%2F20240325T094500Z"
              title="Save Event in my Calendar"
            >
              LÄGG TILL I KALENDER
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
