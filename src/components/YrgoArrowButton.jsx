function YrgoArrowButton() {
  const handleClick = () => {
    console.log("You clicked the arrow!");
    document
      .getElementById("save-the-date")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button id="yrgo-arrow" onClick={handleClick}>
        <svg
          width="55"
          height="76"
          viewBox="0 0 55 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.1747 55.0974C24.9519 55.0974 23.1494 53.2077 23.1494 50.8737V25.6488C23.1494 23.3165 24.9519 21.4268 27.1747 21.4268C29.3991 21.4268 31.2016 23.3165 31.2016 25.6488V50.8737C31.2016 53.2077 29.3991 55.0974 27.1747 55.0974Z"
            fill="#333333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.1747 33.6707C24.9519 33.6707 23.1494 31.7809 23.1494 29.447V4.22209C23.1494 1.88973 24.9519 0 27.1747 0C29.3991 0 31.2016 1.88973 31.2016 4.22209V29.447C31.2016 31.7809 29.3991 33.6707 27.1747 33.6707Z"
            fill="#333333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.2663 73.1582C29.5635 71.7098 29.3265 69.1535 30.7392 67.4469L46.007 49.0018C47.4187 47.2964 49.9433 47.089 51.646 48.5374C53.3499 49.9868 53.5869 52.5431 52.1752 54.2486L36.9074 72.6936C35.4947 74.4003 32.9702 74.6076 31.2663 73.1582Z"
            fill="#333333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.4633 73.1593C21.7605 74.6077 19.236 74.4004 17.8233 72.6937L2.55549 54.2487C1.14379 52.5432 1.38077 49.9869 3.08353 48.5385C4.78745 47.0891 7.31201 47.2965 8.72371 49.0019L23.9915 67.447C25.4042 69.1536 25.1672 71.7099 23.4633 73.1593Z"
            fill="#333333"
          />
        </svg>
      </button>
    </>
  );
}

export default YrgoArrowButton;
