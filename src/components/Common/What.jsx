function What({ session }) {
  const isLoggedIn = session && session.user !== null;
  const companyContent = (
    <>
      <p>
        Välkomna på mingelevent för att hitta framtida medarbetare i ert företag
        eller bara jobba tillsammans under LIA. Ni kommer att träffa
        Webbutvecklare och Digital Designers från Yrgo som vill visa vad de har
        jobbat med under året och vi hoppas att ni hittar en match.
      </p>
      <p>
        Ni som företag kan med fördel ta med någon form av identifikation för
        synlighet. Vi kommer att ha stationer där företag och studerande kan
        träffas.
      </p>
      <p>Varmt välkomna önskar Webbutvecklare och Digital Designers!</p>
    </>
  );

  const studentContent = (
    <>
      <p>
        Välkomna på mingelevent för att hitta framtida LIA-platser. Ni kommer
        att träffa olika företag från branchen som är intresserade av att se vad
        ni har skapat under läsåret och vi hoppas att ni hittar en match.
      </p>
      <p>
        Vi kommer att ha stationer där företag och studerande kan träffas. Tänk
        på att visa era portfolios och mingla med alla!
      </p>
      <p>De anmälda företagen kan ni se nedan.</p>
      <p>Varmt välkomna alla Webbutvecklare och Digital Designers!</p>
    </>
  );

  const textContent = isLoggedIn ? studentContent : companyContent;

  return (
    <div className="p-6 mt-[2.5rem]">
      <h2 className="text-3xl font-semibold text-yrgo-red mb-6">VAD HÄNDER?</h2>
      <div className="flex flex-col gap-y-6">{textContent}</div>
    </div>
  );
}

export default What;
