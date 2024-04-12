import { useState, useEffect } from "react";

const DecryptHeroText = ({ text = "" }) => {
  const [decryptedText, setDecryptedText] = useState("");
  const dictionary = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    let decryptedTextArray = Array(text.length).fill(dictionary[0]);
    setDecryptedText(decryptedTextArray.join(""));

    const decryptText = (str) => {
      let dictionaryIndices = Array(str.length).fill(0);

      const intervalId = setInterval(() => {
        let allCharsDecrypted = true;

        for (let i = 0; i < str.length; i++) {
          if (str[i] === dictionary[dictionaryIndices[i]]) {
            decryptedTextArray[i] = dictionary[dictionaryIndices[i]];
          } else {
            allCharsDecrypted = false;
            dictionaryIndices[i]++;
            if (dictionaryIndices[i] >= dictionary.length) {
              dictionaryIndices[i] = 0;
            }
            decryptedTextArray[i] = dictionary[dictionaryIndices[i]];
          }
        }

        setDecryptedText(decryptedTextArray.join(""));

        if (allCharsDecrypted) {
          clearInterval(intervalId);
        }
      }, 32);
    };

    decryptText(text);
  }, [text]);

  return decryptedText;
};

export default DecryptHeroText;
