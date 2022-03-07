import React from "react";

const Chart = ({ animeStats }) => {
  return (
    <>
      {animeStats.data && (
        <div>
          <h1>{animeStats.data.scores[0].votes}</h1>
        </div>
      )}
    </>
  );
};

export default Chart;
