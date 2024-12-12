import React, { useState } from "react";
import image from "../image/leaf2.png";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div>
      <div className="main-board">
        <Link to={"/mainboard"} className="b-line">
          <div className="agricultur">
            <h3>
              Farm
              <span className="agric-image">
                <img src={image} alt="" />
              </span>
              Track
            </h3>
          </div>
        </Link>
        <div className="input-holders">
          <input
            type="text"
            placeholder="Search for any content"
            className="search-input"
          />
        </div>

        <div
          className="board-details"
          style={{
            fontFamily: "sans-serif",
          }}
        >
          {[
            { name: "Dashboard", path: "/mainboard" },
            { name: "Farmers", path: "/farmers" },
            { name: " Soil Tester", path: "/farms" },
            
            { name: "Test Request", path: "/farm-request" },
          ].map((item, index) => (
            <Link to={item.path} key={index} className="b-line">
              <div
                className={`board--details ${
                  selected === index ? "selected" : ""
                }`}
                onClick={() => handleClick(index)}
                style={{
                  cursor: "pointer",
                }}
              >
                <h4>{item.name}</h4>
              </div>
            </Link>
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
