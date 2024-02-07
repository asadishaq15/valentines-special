import React, { useState } from "react";
import "./page.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="container">
    {yesPressed ? (
      <div className="center">
        <img
          className="heart-img"
          src="ourPhoto.jpg"
          alt="Heart"
        />
        <h1 className="header">ITS A YESSSS, I AM LUCKIEST TO HAVE MERI PYAARI!</h1>
        <p className="love-message">I hope it made you smilee wideee. Bohat sara pyaaar apky liye.</p>
      </div>
    ) : (
      <div className="center">
        <img
          className="bear-img"
          src="myPhoto.JPG"
          alt="Bear"
        />
        <h1 className="header">Will you be my Valentine?</h1>
        <p className="love-message" style={{color:"black", fontSize:"16px", fontFamily:"monospace"}}>SAY YESS AND I WILL MAKE YOU SMILE WIDEEE.</p>
        <div className="button-container">
          <button
            className={`yes-button`}
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true)}
          >
            Yes, forever and always!
          </button>
          <button
            onClick={handleNoClick}
            className="no-button"
          >
            {noCount === 0 ? "No" : getNoButtonText()}
          </button>
        </div>
      </div>
    )}
  </div>

  );
  
}
