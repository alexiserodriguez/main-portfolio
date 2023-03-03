import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SliderComponent(props) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        className="mySwiper"
      >
        <SwiperSlide>{props.children}</SwiperSlide>
      </Swiper>
    </>
  );
}
