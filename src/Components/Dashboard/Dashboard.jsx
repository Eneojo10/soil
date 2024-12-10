import React, { useState } from "react";
import image from "../image/leaf2.png";
import { AiOutlineLogout } from "react-icons/ai";

function Dashboard() {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div>
      <div className="main-board">
        <div className="agricultur">
          <h3>
            agri
            <span className="agric-image">
              <img src={image} alt="" />
            </span>
            culture
          </h3>
        </div>
        <div className="board-details">
          {[
            "Dashboard",
            "Analytics",
            "Fields",
            "Harvesting",
            "Finances",
            "Weather",
            "Settings",
          ].map((item, index) => (
            <div
              key={index}
              className={`board--details ${
                selected === index ? "selected" : ""
              }`}
              onClick={() => handleClick(index)}
              style={{
                // border: selected === index ? "2px solid " : "none",
                cursor: "pointer",
              }}
            >
              <h4>{item}</h4>
            </div>
          ))}
        </div>

        <div className="log-out">
          <div className="logout">
            <AiOutlineLogout />
          </div>
          <div className="log--out">
            <h4>Logout</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
