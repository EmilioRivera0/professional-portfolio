'use client'
import Image, { StaticImageData } from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Formal from "@public/Formal.jpg";
import Malinche from "@public/Malinche.jpg";
import Piramide from "@public/Piramide.jpg";

const images: StaticImageData[] = [Malinche, Formal, Piramide];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

export function Pictures() {
  return(
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      transitionDuration={250}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {images.map((it, index) => <Image src={it} alt="Me" key={index}/>)}
    </Carousel>
  );
}
