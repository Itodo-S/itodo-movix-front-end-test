import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getPopularMovies } from "../../features/popularMovies/popularMoviesSlice";
import { PictureCard } from "../Cards";
import { MovieCategories } from "../MovieCategories";

const FeaturedMovies = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state) => state.popularMovies);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isLeftArrowDisabled = () => currentIndex === 0;
  const isRightArrowDisabled =
    currentIndex + 4 >= popularMovies?.results?.length;

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);
  return (
    <div className="wf-98">
      <MovieCategories
        title="Featured Movie"
        option="See more"
        handlePrev={() => (isLeftArrowDisabled ? toast.warn('You have reached the limit') : handleScroll("left"))}
        handleNext={() => (isRightArrowDisabled ? toast.warn('You have reached the limit')  : handleScroll("right"))}
      >
        {popularMovies?.results
          ?.slice(currentIndex, currentIndex + 4)
          ?.map((movie) => (
            <div key={movie.id}>
              <PictureCard
                movieTitle={movie.title.slice(0, 30) + "..."}
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                genre="Action, Adventure, Horror"
              />
            </div>
          ))}
      </MovieCategories>
    </div>
  );
};

export { FeaturedMovies as default };
