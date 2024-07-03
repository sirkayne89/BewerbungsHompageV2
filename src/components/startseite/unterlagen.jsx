import React, { useState } from 'react';
import AD from './../../image/Arbeitszeugniss_Daimler_(2).png';
import Small0 from './../../image/small_0.png';
import Slideshow from './slideshow';

import './unterlagen.css';

const Unterlagen = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openPopup = (index) => {
    setStartIndex(index);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <section id="unterlagen">
      <h3>Unterlagen</h3>
      <div className="bild-container">
        <div className="unterlagen-item">
          <img
            src={AD}
            alt="Referenzschreiben"
            className="unterlagen-bild"
            onClick={() => openPopup(2)}
          />
          <p>Referenzschreiben</p>
        </div>
        <div className="unterlagen-item">
          <img
            src={Small0}
            alt="Teilnahmebescheinigung"
            className="unterlagen-bild"
            onClick={() => openPopup(3)}
          />
          <p>Teilnahmebescheinigung</p>
        </div>
      </div>

      {popupVisible && <Slideshow startIndex={startIndex} closePopup={closePopup} />}
    </section>
  );
};

export default Unterlagen;
