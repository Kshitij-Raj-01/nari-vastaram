import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function HomeSectionCarousel({data, sectionName}) {
  const [activeIndex, setActiveIndex] = useState(0); // Track activeIndex
  const responsive = {
    0: { items: 2 },
    720: { items: 4 },
    1024: { items: 6.5 },
  };

  let carouselRef = React.useRef(null); // Ref to the carousel component

  // Slide navigation functions
  const slidePrev = () => carouselRef.current.slidePrev();
  const slideNext = () => carouselRef.current.slideNext();

  // Synchronize activeIndex with AliceCarousel
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="bg-[#F1D4A9] p-5 rounded-xl">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 ">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex} // Sync activeIndex when slide changes
        />

        {/* Conditionally render "Next" button */}
        {activeIndex < items.length - 6 && (
  <div className="hidden sm:block">
    <Button
      variant="outlined"
      onClick={slideNext}
      sx={{
        position: "absolute",
        top: "8rem",
        right: "0rem",
        transform: "translateX(50%) rotate(90deg)",
        bgcolor: "transparent",
        borderColor: "#D8A353",
        color: "#D8A353",
        '&:hover': {
          borderColor: "#FFFFFF",
          color: "#FFFFFF",
          bgcolor: "#D8A353",
        },
        minWidth: '40px',
        height: '40px',
      }}
      aria-label="next"
    >
      <KeyboardArrowLeftIcon
        sx={{
          transform: "rotate(90deg)",
          color: "inherit",
          transition: "color 0.3s ease-in-out",
        }}
      />
    </Button>
  </div>
)}

{/* Conditionally render "Prev" button (hidden on mobile) */}
{activeIndex > 0 && (
  <div className="hidden sm:block">
    <Button
      variant="outlined"
      onClick={slidePrev}
      sx={{
        position: "absolute",
        top: "8rem",
        left: "0rem",
        transform: "translateX(-50%) rotate(-90deg)",
        bgcolor: "transparent",
        borderColor: "#D8A353",
        color: "#D8A353",
        '&:hover': {
          borderColor: "#FFFFFF",
          color: "#FFFFFF",
          bgcolor: "#D8A353",
        },
        minWidth: '40px',
        height: '40px',
      }}
      aria-label="previous"
    >
      <KeyboardArrowLeftIcon
        sx={{
          transform: "rotate(90deg)",
          color: "inherit",
          transition: "color 0.3s ease-in-out",
        }}
      />
    </Button>
  </div>
)}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
