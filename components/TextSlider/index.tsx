import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

export default function TextSlider_A() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,
      autoplaySpeed:3000
    };
  return (
    <div className="flex-[0.5] max-w-[350px] min-w-[250px] grad-one rounded-xl h-[27vh] p-7">
      <Slider {...settings}>
        <Slide
          title={`Today's Quote`}
          text="“There is more treasure in books than in all the pirate’s loot on Treasure Island.”"
          caption='- Walt Disney'
        />
        <Slide
          title={`Today's Quote`}
          text="“There is more treasure in books than in all the pirate’s loot on Treasure Island.”"
          caption='- Walt Disney'
        />
        <Slide
          title={`Today's Quote`}
          text="“There is more treasure in books than in all the pirate’s loot on Treasure Island.”"
          caption='- Walt Disney'
        />
      </Slider>
    </div>
  );
}
