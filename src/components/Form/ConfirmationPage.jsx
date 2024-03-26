import AnimationHeartSkull from "../Animations/AnimationHeartSkull";

export default function ConfirmationPage({ setIsSubmitted }) {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 md:py-10"
      onClick={() => setIsSubmitted(false)}
    >
      <div
        className="bg-badboy-gray w-full h-full md:max-w-sm md:max-h-sm shadow-lg relative overflow-auto"
        onClick={stopPropagation}
      >
        <button
          className="absolute top-0 right-0 m-4"
          onClick={() => setIsSubmitted(false)}
        >
          X
        </button>
        <div className="flex justify-between p-6 mt-12">
          <AnimationHeartSkull />
          <img src="src/assets/YrgoRed.png" />
        </div>
        <div className="pt-10 pb-10 pl-6">
          <p className="w-3/4 text-6xl font-extralight">
            TACK FÖR ANMÄLAN <span className="font-semibold">VI SES!</span>
          </p>
        </div>

        <div className="w-full h-[235px] px-[52px] py-6 bg-black flex-col justify-start items-start gap-6 inline-flex">
          <div className="pl-1 justify-start items-start gap-[88px] inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
            </div>
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
            </div>
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
            </div>
          </div>
          <div className="flex-col justify-start items-end gap-2.5 flex">
            <div className="justify-start items-start gap-10 inline-flex">
              <div className="w-[58px] text-stone-300 text-2xl font-light font-['Inter'] leading-[33.60px]">
                24
                <br />
                04
                <br />
                24
              </div>
              <div className="text-center text-stone-300 text-2xl font-light font-['Inter'] leading-[33.60px]">
                15.00
                <br />-<br />
                17.00
              </div>
              <div className="w-[88px] text-stone-300 text-2xl font-light font-['Inter'] leading-[33.60px]">
                VISUAL <br />
                <br />
                ARENA
              </div>
            </div>
            <div className="p-1 flex-col justify-start items-start gap-1 flex">
              <div className="justify-center items-center gap-1 inline-flex">
                <div className="w-36 text-white text-base font-extralight font-['Inter']">
                  Lindholmspiren 3-5
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-grow justify-center items-center">
          <div className="py-10">
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
    </div>
  );
}
