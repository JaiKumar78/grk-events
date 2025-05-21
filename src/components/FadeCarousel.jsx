import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets";

const images = [
    assets.grkstage_decor,
    assets.magizh_bday_decor,
    assets.rakshit_bday_decor,
    assets.seyon_bday_decor,
    assets.ritvik_bday_decor
];

const FadeCarousel = () => {
  const settings = {
    dots: false,         // Remove bottom navigator
    arrows: false,       // Remove left/right buttons
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false
  };

  return (
    <div className="slider-container w-full max-w-5xl mx-auto">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[300px] md:h-[500px]  object-cover md:rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FadeCarousel;
