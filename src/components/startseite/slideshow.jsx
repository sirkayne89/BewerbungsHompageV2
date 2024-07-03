import React, { useState } from 'react';
import LL from './../../image/Öztürk_Serkan_Lebenslauf1.png';
import LL1 from './../../image/Öztürk_Serkan_Lebenslauf2.png';
import AD from './../../image/Arbeitszeugniss_Daimler_(2).png';
import Small0 from './../../image/small_0.png';
import Small1 from './../../image/small_1.png';
import Small2 from './../../image/small_2.png';
import Small3 from './../../image/small_3.png';
import Small4 from './../../image/small_4.png';
import Small5 from './../../image/small_5.png';
import Small6 from './../../image/small_6.png';
import Small7 from './../../image/small_7.png';
import Small8 from './../../image/small_8.png';

import './unterlagen.css';

const images = [LL, LL1, AD, Small0, Small1, Small2, Small3, Small4, Small5, Small6, Small7, Small8];

const Slideshow = ({ startIndex, closePopup }) => {
  const [current, setCurrent] = useState(startIndex);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closePopup}>&times;</button>
        <img src={images[current]} alt={`slide ${current}`} />
        <button className="slideshow-button prev" onClick={prevSlide}>&#10094;</button>
        <button className="slideshow-button next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slideshow;
