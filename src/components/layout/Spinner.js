import React from "react";
import loading from "../../img/loadingGary.gif";

const Spinner = () => {
  return (
    <div className="center">
      <img width={180} src={loading} alt="Loading..." />
    </div>
  );
};

export default Spinner;
