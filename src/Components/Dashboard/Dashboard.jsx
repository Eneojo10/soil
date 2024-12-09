import React from "react";
import image from "../image/leaf2.png";
import { AiOutlineLogout } from "react-icons/ai";

function Dashboard() {
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
          <div className="board--details">
            <h4>Dashboard</h4>
          </div>
          <div className="board--details">
            <h4>Analytics</h4>
          </div>
          <div className="board--details">
            <h4>Fields</h4>
          </div>
          <div className="board--details">
            <h4>Harvesting</h4>
          </div>
          <div className="board--details">
            <h4>Finances</h4>
          </div>
          <div className="board--details">
            <h4>Weather</h4>
          </div>
          <div className="board--details">
            <h4>Settings</h4>
          </div>
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
