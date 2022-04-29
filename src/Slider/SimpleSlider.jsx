/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import './SimpleSlider.css';

function SimpleSlider() {
  // const dotSettings = () => (
  //   <div
  //     style={{
  //       width: '15px',
  //       height: '7px',
  //       backgroundColor: '#495057',
  //       border: '1px #495057 solid',
  //       borderRadius: '50px',
  //     }}
  //   />
  // );

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    infinite: true,
    speed: 800,
    arrows: true,
    // customPaging: dotSettings,
  };
  return (
    <div className="image">
      <h3 className="text-center mb-4">Check out some of my projects</h3>
      <Slider {...settings}>
        <div className="slide-container">
          <a href="https://alijeyrad.github.io/emoji-search/" target="_blank" rel="noreferrer">
            <img className="img-fluid img-thumbnail" src="https://alijeyrad.github.io/my-website/assets/img/p01.png" alt="emojies" />
          </a>
        </div>
        <div className="slide-container">
          <a href="https://alijeyrad.github.io/movies/" target="_blank" rel="noreferrer">
            <img className="img-fluid img-thumbnail" src="https://alijeyrad.github.io/my-website/assets/img/p02.png" alt="movies" />
          </a>
        </div>
        <div className="slide-container">
          <a href="https://alijeyrad.github.io/quiz-app/" target="_blank" rel="noreferrer">
            <img className="img-fluid img-thumbnail" src="https://alijeyrad.github.io/my-website/assets/img/p03.png" alt="quiz" />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
