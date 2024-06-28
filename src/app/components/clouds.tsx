// components/Clouds.jsx
import React from "react";
import { IoCloud } from "react-icons/io5";

const Clouds = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <IoCloud
        className="cloud absolute text-gray-300 animate-[float_40s_linear_infinite] opacity-30"
        style={{ top: "10%", left: "9%" }}
      />
      <IoCloud
        className="cloud absolute text-gray-300 animate-[float_45s_linear_infinite] opacity-30"
        style={{ top: "30%", left: "40%" }}
      />
      <IoCloud
        className="cloud absolute text-gray-300 animate-[float_50s_linear_infinite] opacity-30"
        style={{ top: "50%", left: "10%" }}
      />
      <IoCloud
        className="cloud absolute text-gray-300 animate-[float_55s_linear_infinite] opacity-30"
        style={{ top: "70%", left: "80%" }}
      />
      <IoCloud
        className="cloud absolute text-gray-300 animate-[float_60s_linear_infinite] opacity-30"
        style={{ top: "80%", left: "5%" }}
      />
    </div>
  );
};

export default Clouds;
