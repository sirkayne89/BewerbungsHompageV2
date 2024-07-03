import React, { useState } from "react";
import OeSL from "./../../image/Öztürk_Serkan_Lebenslauf1.png";
import OeSL2 from "./../../image/Öztürk_Serkan_Lebenslauf2.png";
import BD from "./../../image/bewerbung_deckblatt.jpg";

import "./lebenslauf.css";

const Lebenslauf = () => {
  const [popupVisible1, setPopupVisible1] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [BD, OeSL, OeSL2];

  const showPopup1 = () => {
    setPopupVisible1(true);
  };

  const closePopup1 = () => {
    setPopupVisible1(false);
    setCurrentImageIndex(0);
  };

  const nextImage1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage1 = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="lebenslauf">
      <h3>Lebenslauf</h3>
      <br />
      <div className="bild-container">
        <img
          src={BD}
          alt="Bewerbung Deckblatt"
          className="lebenslauf-bild"
          onClick={showPopup1}
        />
      </div>

      {popupVisible1 && (
        <div className="popup-overlay1" onClick={closePopup1}>
          <div className="popup-content1" onClick={(e) => e.stopPropagation()}>
            <button className="close-button1" onClick={closePopup1}>
              &times;
            </button>
            <button className="prev-button" onClick={prevImage1}>
              &lt;
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Lebenslauf Bild ${currentImageIndex + 1}`}
            />
            <button className="next-button" onClick={nextImage1}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Lebenslauf;
