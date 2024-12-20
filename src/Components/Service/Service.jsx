import React from "react";
import "./service.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const Service = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {Services_Data.map((Service, idx) => {
          return (
            <div key={idx} className="services-format">
              <h3>{Service.s_no}</h3>
              <h2>{Service.s_name}</h2>
              <p>{Service.s_desc}</p>

              <div className="services-readmore">
                <p>Read more</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
