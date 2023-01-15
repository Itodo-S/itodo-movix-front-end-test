import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getNewMovies } from "../../features/newMovies/newMoviesSlice";
import { PictureCard } from "../Cards";
import { MovieCategories } from "../MovieCategories";

const NewArrival = () => {
  const dispatch = useDispatch();
  const { newMovies } = useSelector((state) => state.newMovies);
  const [currentIndex, setCurrentIndex] = useState(0);

  // HANDLES THE SCROLL FUNCTIONALITY ON THE MOVIES BUTTONS
  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // DISABLES THE SCROLL BUTTONS ON THEIR LIMITS
  const isLeftArrowDisabled = currentIndex === 0;
  const isRightArrowDisabled = currentIndex + 4 >= newMovies?.results?.length;

  // DISPATCHES MY STATE
  useEffect(() => {
    dispatch(getNewMovies());
  }, [dispatch]);
  return (
    <div className="wf-98">
      <MovieCategories
        title="New Arrival"
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
        {newMovies?.results
          ?.slice(currentIndex, currentIndex + 4)
          ?.map((newMovie) => (
            <div key={newMovie.id}>
              <PictureCard
                movieTitle={newMovie.title.slice(0, 30) + "..."}
                src={`https://image.tmdb.org/t/p/w500${newMovie?.poster_path}`}
              />
            </div>
          ))}
      </MovieCategories>
    </div>
  );
};

export { NewArrival as default };
