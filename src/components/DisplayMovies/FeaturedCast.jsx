import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getFeaturedCast } from "../../features/featuredCast/featuredCastSlice";
import { PictuerCastCard } from "../Cards";
import { MovieCategories } from "../MovieCategories";

const FeaturedCast = () => {
  const dispatch = useDispatch();
  const { featuredCasts } = useSelector((state) => state.featuredCasts);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isLeftArrowDisabled = currentIndex === 0;
  const isRightArrowDisabled =
    currentIndex + 4 >= featuredCasts?.results?.length;

  useEffect(() => {
    dispatch(getFeaturedCast());
  }, [dispatch]);

  return (
    <div className="wf-98">
      <MovieCategories
        title="Featured Casts"
        option="See more"
        handlePrev={() =>
          isLeftArrowDisabled
            ? toast.warn("You have reached the limit")
            : handleScroll("left")
        }
        handleNext={() =>
          isRightArrowDisabled
            ? toast.warn("You have reached the limit")
            : handleScroll("right")
        }
      >
        {featuredCasts?.cast
          ?.slice(currentIndex, currentIndex + 4)
          ?.map((item) => (
            <div key={item.id}>
              <PictuerCastCard
                movieTitle={item.character}
                src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
              />
            </div>
          ))}
      </MovieCategories>
    </div>
  );
};

export { FeaturedCast as default };
