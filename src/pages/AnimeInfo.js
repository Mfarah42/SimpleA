import React, { useEffect, useContext } from "react";
import AnimeContext from "../context/animeContext/AnimeContext";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";

const AnimeInfo = () => {
  const { fetchAnime, anime, loading } = useContext(AnimeContext);
  const params = useParams();

  useEffect(() => {
    fetchAnime(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data } = anime;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {data && (
        <>
          <div className="anime-title center">{<h1>{data.title}</h1>}</div>
          <div className="anime-cover">
            <div className="anime-img-info">
              <img
                className="anime-cover-img center"
                src={data.images.jpg.large_image_url}
                alt="cover-img"
              />
            </div>

            <div className="anime-info ">
              <p>woooordssss</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default AnimeInfo;
