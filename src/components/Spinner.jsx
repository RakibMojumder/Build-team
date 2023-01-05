import React from "react";
import { BeatLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <BeatLoader
        color="#14B8A6"
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
