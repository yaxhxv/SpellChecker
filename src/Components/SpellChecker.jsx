import React, { useState } from "react";
 

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

 const SpellCheck = () => {
  const [inputText, setInputText] = useState("");
  const [correction, setCorrection] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputText(inputValue);
    setCorrection("");
    const words = inputValue.split(" ");
    for (let word of words) {
      if (customDictionary[word]) {
        setCorrection(customDictionary[word]);
        break;
      }
    }
  };

  return (
    <div className="center">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
      ></textarea>
      {correction && (
        <p className="correction">
          Did you mean:{" "}
          <strong>
            {correction.charAt(0).toLowerCase() + correction.slice(1)}
          </strong>
          ?
        </p>
      )}
    </div>
  );
};

export default SpellCheck;