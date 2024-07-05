import React from "react";
import idea from "../../Assets/idea1.png";
import house from "../../Assets/house.png";
import connections from "../../Assets/connections.png";
import rooms from "../../Assets/rooms.png";
import "./HeaderImage.css";
const HeaderImage = () => {
  return (
    <div>
      <footer className="about-footer1">
        <div className="about-stats1">
          <div className="stat-item1">
            <img src={rooms} alt="" className="logo" />
            <div>
              <span className="stat-number1">2000 +</span>
              <span className="stat-text1">Rooms</span>
            </div>
          </div>
          <div className="stat-item1">
            <img src={connections} alt="" className="logo" />
            <div>
              <span className="stat-number2">800 +</span>
              <span className="stat-text1">Connections</span>
            </div>
          </div>
          <div className="stat-item1">
            <img src={house} alt="" className="logo" />
            <div>
              <span className="stat-number3">100 +</span>
              <span className="stat-text1">Residencies</span>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <img className="idea" src={idea} alt="" srcset="" />
      </div>
    </div>
  );
};

export default HeaderImage;
