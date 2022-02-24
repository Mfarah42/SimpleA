/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({
  anime: { title, aired, images, duration, rating, synopsis },
}) => {
  return (
    <Link to={`/anime/${title}`}>
      <div
        className="movie_card"
        onClick={() => {
          console.log("Clicked Card");
        }}
      >
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={images.jpg.image_url}
              alt="Anime Image"
            />
            <h1>{title}</h1>
            <h4>{aired.string}</h4>
            <span className="minutes">{duration}</span>
            <p className="type">{rating}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{synopsis}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">Share something</i>
              </li>
              <li>
                <i className="material-icons">Something here</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back test">
          <img
            className="locandina"
            src={images.jpg.large_image_url}
            alt="Anime Image"
          />
        </div>
      </div>
    </Link>
  );
};
export default AnimeCard;
