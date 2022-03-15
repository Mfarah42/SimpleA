import React, { useEffect, useContext } from "react";
import AnimeContext from "../context/animeContext/AnimeContext";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import Chart from "../components/layout/Chart";

const AnimeInfo = () => {
  const { fetchAnime, fetchAnimeStats, anime, animeStats, loading } =
    useContext(AnimeContext);
  const params = useParams();

  useEffect(() => {
    fetchAnime(params.id);
    fetchAnimeStats(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data } = anime;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {data && animeStats.data && (
        <section className="animeInfoContainer ">
          <div className="leftHalf animeInfo">
            <h1 className="center htest">{data.title}</h1>
            <div className="leftHalfdiv">
              <img
                // className="anime-cover-img "
                src={data.images.jpg.large_image_url}
                alt="cover-img"
              />
              <Chart animeStats={animeStats} />
            </div>
          </div>
          <div className="rightHalf animeInfo">
            <h1>Right half</h1>
          </div>
        </section>
      )}
    </>
  );
};
export default AnimeInfo;
