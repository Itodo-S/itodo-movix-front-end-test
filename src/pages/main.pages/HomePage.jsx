import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets";
import { ExclusiveVideoCard } from "../../components/Cards";
import {
  FeaturedCast,
  FeaturedMovies,
  NewArrival,
} from "../../components/DisplayMovies";
import { Footer } from "../../components/Footer";
import { ExclusiveVideosCat } from "../../components/MovieCategories";
import Nav from "../../components/Navigation/Nav";

const HomePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="homepage d-flex flex-direction-col justify-content-center align-items-center">
      <div
        className="homepage__hero-bg flex-direction-col"
        style={{ backgroundImage: `url(${assets.Poster})` }}
      >
        {/* NAVIGATION */}
        <Nav />

        {/* HERO BODY SECTION */}
        <div className="d-flex justify-content-between align-items-center wf-90">
          <div className="wf-100">
            <div className="homepage__body flex-direction-col d-flex wf-100 pdy-20 mgt-40">
              <p className="fs-48 fw-bold text-white">
                John Wick 3 : <br /> Parabellum
              </p>

              <div className="d-flex align-items-center mgt-20">
                <div className="d-flex align-items-center text-white fs-12">
                  <img src={assets.imdb} alt="Icon" />

                  <p className="mgl-10">86.0 / 100</p>
                </div>

                <div className="mgl-45 d-flex align-items-center text-white fs-12">
                  <img src={assets.cherry} alt="Icon" />

                  <p className="mgl-10">97%</p>
                </div>
              </div>

              <div className="wf-24 mgt-18 text-white">
                <p className="fs-14 fw-medium">
                  John Wick is on the run after killing a member of the
                  international assassins' guild, and with a $14 million price
                  tag on his head, he is the target of hit men and women
                  everywhere.
                </p>
              </div>
            </div>

            <div className="mgt-5 text-white">
              <div className="btn-watch">
                <img src={assets.play} alt="Icon" />
                <p className="mgl-5">Watch trailer</p>
              </div>
            </div>
          </div>

          <div className="text-white d-flex flex-direction-col align-items-end w-30">
            <p className="fs-12 fw-bold mgt-8 text-accent-dark-200">1</p>
            <p className="fs-12 fw-bold mgt-8 text-accent-dark-200">2</p>
            <p className="fs-16 fw-bold mgt-8">- 3</p>
            <p className="fs-12 fw-bold mgt-8 text-accent-dark-200">4</p>
            <p className="fs-12 fw-bold mgt-8 text-accent-dark-200">5</p>
          </div>
        </div>
      </div>

      {/* DISPLAYS FEATURED MOVIES */}
      <FeaturedMovies />

      {/* DISPLAYS  NEW MOVIES */}
      <NewArrival />

      {/* DISPLAYS  EXCLUSIVE VIDEO */}
      <ExclusiveVideosCat title="Exclusive Videos" option="See more">
        <ExclusiveVideoCard src={assets.lamb} title="Lamb (2021) Trailer" />
        <ExclusiveVideoCard
          src={assets.squad}
          title="The Suicide Squad : John Cena Interview"
        />
        <ExclusiveVideoCard
          src={assets.will}
          title="Will there be a new era of horror movie?"
        />
      </ExclusiveVideosCat>

      {/* DISPLAYS  FEATURED CASTS */}
      <FeaturedCast />

      {/* DISPLAYS FOOTER */}
      <Footer />
    </div>
  );
};

export { HomePage as default };
