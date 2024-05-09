import React from "react";
import "../styles/HeroStatistic.scss";

const HeroStatistic: React.FC = () => {
  return (
    <div className="hero-statistic">
      <div className="hero-statistic__info">
        <div className="hero-statistic__wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="31"
            viewBox="0 0 24 31"
            fill="none"
          >
            <path
              d="M23.9585 0.660309C23.9221 0.578956 23.863 0.509938 23.7882 0.461665C23.7134 0.413392 23.6262 0.387949 23.5373 0.388435H10.4995C10.4212 0.388565 10.3441 0.408374 10.2755 0.446045C10.2068 0.483717 10.1486 0.538047 10.1064 0.604059L0.0822939 16.5415C0.0340351 16.6109 0.00583936 16.6923 0.000813382 16.7768C-0.00421259 16.8612 0.0141262 16.9454 0.0538094 17.02C0.0934926 17.0947 0.15298 17.1569 0.225716 17.1998C0.298451 17.2428 0.381612 17.2648 0.466035 17.2634H7.64479L1.30839 29.6853C1.27201 29.7592 1.25491 29.8411 1.25869 29.9234C1.26247 30.0056 1.287 30.0856 1.33 30.1558C1.37299 30.2261 1.43305 30.2842 1.50456 30.3249C1.57607 30.3656 1.6567 30.3874 1.73893 30.3884H4.54679C4.61175 30.3889 4.67608 30.3757 4.7357 30.3499C4.79532 30.3241 4.84892 30.2861 4.89309 30.2384L21.3378 12.4353C21.4031 12.3687 21.447 12.284 21.4639 12.1922C21.4809 12.1003 21.47 12.0055 21.4328 11.9199C21.3956 11.8343 21.3337 11.7618 21.2551 11.7116C21.1765 11.6615 21.0847 11.636 20.9915 11.6384H14.6832L23.8836 1.15718C23.9429 1.0906 23.9816 1.00815 23.9949 0.919911C24.0082 0.831672 23.9955 0.741465 23.9585 0.660309Z"
              fill="#2B788B"
            />
          </svg>
          <span>600</span>
        </div>
        <p className="hero-statistic__info_text">Popular words</p>
      </div>
      <div className="hero-statistic__info">
        <div className="hero-statistic__wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="31"
            viewBox="0 0 24 31"
            fill="none"
          >
            <path
              d="M23.9585 0.660309C23.9221 0.578956 23.863 0.509938 23.7882 0.461665C23.7134 0.413392 23.6262 0.387949 23.5373 0.388435H10.4995C10.4212 0.388565 10.3441 0.408374 10.2755 0.446045C10.2068 0.483717 10.1486 0.538047 10.1064 0.604059L0.0822939 16.5415C0.0340351 16.6109 0.00583936 16.6923 0.000813382 16.7768C-0.00421259 16.8612 0.0141262 16.9454 0.0538094 17.02C0.0934926 17.0947 0.15298 17.1569 0.225716 17.1998C0.298451 17.2428 0.381612 17.2648 0.466035 17.2634H7.64479L1.30839 29.6853C1.27201 29.7592 1.25491 29.8411 1.25869 29.9234C1.26247 30.0056 1.287 30.0856 1.33 30.1558C1.37299 30.2261 1.43305 30.2842 1.50456 30.3249C1.57607 30.3656 1.6567 30.3874 1.73893 30.3884H4.54679C4.61175 30.3889 4.67608 30.3757 4.7357 30.3499C4.79532 30.3241 4.84892 30.2861 4.89309 30.2384L21.3378 12.4353C21.4031 12.3687 21.447 12.284 21.4639 12.1922C21.4809 12.1003 21.47 12.0055 21.4328 11.9199C21.3956 11.8343 21.3337 11.7618 21.2551 11.7116C21.1765 11.6615 21.0847 11.636 20.9915 11.6384H14.6832L23.8836 1.15718C23.9429 1.0906 23.9816 1.00815 23.9949 0.919911C24.0082 0.831672 23.9955 0.741465 23.9585 0.660309Z"
              fill="#2B788B"
            />
          </svg>
          <span>1</span>
        </div>
        <p className="hero-statistic__info_text">Mini-games</p>
      </div>
    </div>
  );
};

export default HeroStatistic;