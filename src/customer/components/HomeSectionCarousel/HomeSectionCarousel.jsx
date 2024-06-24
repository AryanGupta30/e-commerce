import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({data,sectionName}) => {

    const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = (e) => setActiveIndex(e.item); 

  const items = data.slice(0,10).map((item,index) => <HomeSectionCard key={index} product={item}/>);

  return (
    <div className="relative px-4 lg:px-8 ">
      <div className="relative p-4 border-none">
        <h2 className="text-2xl font-extrabold text-grey-800 py-3 mb-5">{sectionName}</h2>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex!==items.length-5 && <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "12rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            backgroundColor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}

        {activeIndex!==0 && <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "12rem",
            left: "-3.9rem",
            transform: "translateX(50%) rotate(-90deg)",
            backgroundColor: "white",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
