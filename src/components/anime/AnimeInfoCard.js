/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const AnimeInfoCard = ({ anime }) => {
  return (
    <div className="movie_card">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            src={anime.images.jpg.image_url}
            alt="Anime Image"
          />
          <h1>{anime.title}</h1>
          <h4>{anime.aired.string}</h4>
          <span className="minutes">{anime.duration}</span>
          <p className="type">{anime.rating}</p>
        </div>
        <div className="movie_desc">
          <p className="text">{anime.synopsis}</p>
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
          src={anime.images.jpg.large_image_url}
          alt="Anime Image"
        />
      </div>
    </div>
  );
};

export default AnimeInfoCard;
