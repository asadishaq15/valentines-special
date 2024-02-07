import React, { useState, useEffect } from "react";
import "./page.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [bearImgLoaded, setBearImgLoaded] = useState(false);
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

  useEffect(() => {
   
    const img = new Image();
    img.onload = () => {
      setBearImgLoaded(true);
    };
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWoY7FUzuv_Kf86yogUFarXRzZLt3HNEkrm9BWZGKfR5Qyl2eLfK1wUtCbfAs2qUPRz8&usqp=CAU";
  }, []);

  return (
    <div className="container">
      {yesPressed ? (
        <div className="center">
          <img
            className={`heart-img ${yesPressed ? "fade-in" : ""}`}
            src="https://i.pinimg.com/originals/5f/bb/54/5fbb54bea8a880624b4f8fae3215004a.gif"
            alt="Heart"
          />
          <h1 className={`header ${yesPressed ? "fade-in" : ""}`}>
            I would be your happiest Valentine!
          </h1>
          <p
            className={`love-message ${yesPressed ? "fade-in" : ""}`}
            style={{ color: "black", fontSize: "16px", fontFamily: "monospace" }}
          >
            I hope it made you smilee wide ❤️
          </p>
        </div>
      ) : (
        <div className="center">
          <img
            className={`bear-img ${bearImgLoaded ? "slide-in" : ""}`}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWoY7FUzuv_Kf86yogUFarXRzZLt3HNEkrm9BWZGKfR5Qyl2eLfK1wUtCbfAs2qUPRz8&usqp=CAU"
            alt="Bear"
          />
          <h1 className={`header ${bearImgLoaded ? "fade-in" : ""}`}>
            Will you be my Valentine?
          </h1>
          <p className={`love-message ${bearImgLoaded ? "fade-in" : ""}`}>
            SAY YESS AND I WILL MAKE YOU SMILE WIDEEE.
          </p>
          <div className="button-container">
            <button
              className={`yes-button ${bearImgLoaded ? "fade-in" : ""}`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes, forever and always!
            </button>
            <button onClick={handleNoClick} className={`no-button ${bearImgLoaded ? "fade-in" : ""}`}>
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
