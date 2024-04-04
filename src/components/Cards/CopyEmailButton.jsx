import { useState, useEffect } from "react";

export const CopyEmailButton = ({
  type,
  size,
  contact,
  background,
  textColor,
}) => {
  const sizeClassNames = size === "small" ? "px-2 py-1" : "text-2xl px-4 py-2";
  const backgroundColor =
    background === undefined ? "night-sky-blue" : background;
  const text = textColor === undefined ? "text-white" : "text-black";

  const [copySuccess, setCopySuccess] = useState(null);

  useEffect(() => {
    let timeoutId;
    if (copySuccess) {
      timeoutId = setTimeout(() => {
        setCopySuccess(null);
      }, 2500); // 15 seconds delay
    }
    return () => clearTimeout(timeoutId); // Clear timeout if component unmounts
  }, [copySuccess]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contact);
      setCopySuccess("KOPIERAD");
    } catch (err) {
      setCopySuccess("EJ KOPIERAD");
    }
  };

  return (
    <>
      <button
        onClick={copyToClipboard}
        type={type}
        className={`bg-${backgroundColor} ${text} rounded flex justify-center items-center w-fit ${sizeClassNames}`}
      >
        {copySuccess ? copySuccess : "KONTAKT"}
      </button>
    </>
  );
};

export default CopyEmailButton;
