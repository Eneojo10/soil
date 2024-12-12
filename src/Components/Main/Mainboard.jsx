import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import image from "../image/user2.jpg";
import image2 from "../image/soil.jpg";
import { WiDegrees } from "react-icons/wi";
import image3 from "../image/weather.png";
// import { IoIosSearch } from "react-icons/io";
import Chart from "../Chart/Chart";
import image03 from "../image/leaf2.png";
import Hamburger from "../Hamburger/Hamburger";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      data: [300, 50, 100, 75],
      backgroundColor: ["#029c34", "#029c34", "#e2fea5"],
      borderColor: "#FFFFFF",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
};

function Mainboard() {
  const [farmers, setFarmers] = useState({});
  const [request, setRequest] = useState(null);


 


  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        let token = localStorage.getItem("token");

        const response = await axios.get(
          "https://agriculture-server-beta.onrender.com/api/v1/admin/analytics",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data);

        setFarmers(response.data.data);
      } catch (error) {
        console.error("Error fetching summary data:", error);
      }
    };

    fetchFarmers();
  }, []);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "https://agriculture-server-beta.onrender.com/api/v1/admin/requests",
          {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data);
        setRequest(response.data.data); 
      } catch (error) {
        console.error("Error fetching summary data:", error);
      }
    };

    fetchRequest();
  }, []);

  return (
    <div>
      <div className="content">
        <div className="dash-board">
          <Dashboard />
        </div>

        <div className="con-tent">
          <div className="cont-ent">
            <div className="content-top">
              <div className="input-holder">
                {/* <IoIosSearch className="search-icon" /> */}
                <input
                  type="text"
                  placeholder="Search for any content"
                  className="search-input"
                />
              </div>

              <div className="content-img">
                <img src={image} alt="" />
              </div>
            </div>
            <br />
            <div className="ham-burg">
              <div className="ham-flex">
                <div className="img03">
                  <img src={image03} alt="" />
                </div>
                <div className="ham">
                  <Hamburger />
                </div>
              </div>
            </div>

            <div className="weathersummary">
              <div className="cl1">
                <h4>Summary</h4>
                <div className="color-flex">
                  <div className="color0001">
                    <div className="color01">
                      <div className="cp">
                        <h5>Farmers</h5>
                        {/* <h5>Hello World...</h5> */}
                        <p>{farmers.totalUsers}</p>
                      </div>
                      <div className="circle-progress">
                        <svg width="40" height="80" viewBox="0 0 100 100">
                          <circle
                            className="circle-bg"
                            cx="50"
                            cy="50"
                            r="45"
                          />
                          <circle
                            className="circle-fill"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{
                              strokeDasharray: "283",
                              strokeDashoffset: "169",
                            }}
                          />

                          <text
                            x="50"
                            y="50"
                            textAnchor="middle"
                            stroke="black"
                            strokeWidth="1px"
                            dy=".3em"
                            fontSize={"28px"}
                            className="circle-text"
                          >
                            10%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="color02">
                    <div className="color01">
                      <div className="cp">
                        <h5>Farm Lands</h5>
                        {/* <h5>Hello World...</h5> */}
                        <p>{farmers.totalLands}</p>
                      </div>
                      <div className="circle-progress">
                        <svg width="40" height="80" viewBox="0 0 100 100">
                          <circle
                            className="circle-bg"
                            cx="50"
                            cy="50"
                            r="45"
                          />
                          <circle
                            className="circle-fill"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{
                              strokeDasharray: "283",
                              strokeDashoffset: "169",
                            }}
                          />

                          <text
                            x="50"
                            y="50"
                            textAnchor="middle"
                            stroke="black"
                            strokeWidth="1px"
                            dy=".3em"
                            fontSize={"28px"}
                            className="circle-text"
                          >
                            13%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="color-flex">
                  <div className="color02">
                    <div className="color01">
                      <div className="cp">
                        <h5> Soil Tester</h5>
                        {/* <h5>Hello World...</h5> */}
                        <p>10</p>
                      </div>
                      <div className="circle-progress">
                        <svg width="40" height="80" viewBox="0 0 100 100">
                          <circle
                            className="circle-bg"
                            cx="50"
                            cy="50"
                            r="45"
                          />
                          <circle
                            className="circle-fill"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{
                              strokeDasharray: "283",
                              strokeDashoffset: "169",
                            }}
                          />

                          <text
                            x="50"
                            y="50"
                            textAnchor="middle"
                            stroke="black"
                            strokeWidth="1px"
                            dy=".3em"
                            fontSize={"28px"}
                            className="circle-text"
                          >
                            10%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="color0001">
                    <div className="color01">
                      <div className="cp">
                        <h5>Soil Request</h5>
                        {/* <h5>Hello World...</h5> */}
                        <p>{farmers.totalRequests}</p>
                      </div>
                      <div className="circle-progress">
                        <svg width="40" height="80" viewBox="0 0 100 100">
                          <circle
                            className="circle-bg"
                            cx="50"
                            cy="50"
                            r="45"
                          />
                          <circle
                            className="circle-fill"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{
                              strokeDasharray: "283",
                              strokeDashoffset: "169",
                            }}
                          />

                          <text
                            x="50"
                            y="50"
                            textAnchor="middle"
                            stroke="black"
                            strokeWidth="1px"
                            dy=".3em"
                            fontSize={"28px"}
                            className="circle-text"
                          >
                            13%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />

                <div>
                  <h5>Manage your Farm</h5>
                  <div className="table-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>Farm Name</th>
                          <th>Address</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {request ? (
                          request?.map((land, index) => (
                            <tr key={land._id}>
                              <td>{index + 1}</td>
                              <td>{land.land.name}</td>
                              <td>{land.land.location.address}</td>
                              <td>{land.status || "N/A"}</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    className="dropdown-btn btn-sm"
                                    type="button"
                                    onClick={() => toggleDropdown(index)}
                                  >
                                    <FontAwesomeIcon
                                      icon={faEllipsisVertical}
                                    />
                                  </button>
                                  {/* {dropdownVisible === index && (
                                    <ul className="dropdown-menu">
                                      <li>
                                        <Link
                                          className="dropdown-item"
                                          to={`/farm/${land._id}`} // Assuming you pass farm ID to view
                                          style={{
                                            textDecoration: "none",
                                            fontWeight: "700",
                                            color: "#0099cc",
                                          }}
                                        >
                                          VIEW
                                        </Link>
                                      </li>
                                      <li>
                                        <button
                                          className="dropdown-item"
                                          style={{
                                            textDecoration: "none",
                                            fontWeight: "700",
                                            color: "#cc0000",
                                            border: "none",
                                            background: "none",
                                          }}
                                          onClick={() =>
                                            alert("Edit functionality here")
                                          }
                                        >
                                          EDIT
                                        </button>
                                      </li>
                                    </ul>
                                  )} */}
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5">Loading...</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <br />

                <br />
                
              </div>
              <div className="cl2">
                

                <div className="temperature">
                  <div className="w1">
                    <h4>June 25</h4>
                    <div className="num-bers">
                      <h3>
                        29{" "}
                        <span className="degrees">
                          <WiDegrees />
                        </span>
                      </h3>
                      <p>Temperature</p>
                    </div>
                  </div>
                  <div className="w1">
                    <h4>June 25</h4>
                    <div className="num-bers">
                      <h3>
                        32
                        <span className="degrees">
                          <WiDegrees />
                        </span>
                      </h3>
                      <p>Temperature</p>
                    </div>
                  </div>
                </div>
                <div className="temperatures">
                  <div className="w1">
                    <h4>June 25</h4>
                    <div className="num-bers">
                      <h3>
                        39
                        <span className="degrees">
                          <WiDegrees />
                        </span>
                      </h3>
                      <p>Temperature</p>
                    </div>
                  </div>
                  <div className="w1">
                    <h4>June 25</h4>
                    <div className="num-bers">
                      <h3>
                        42
                        <span className="degrees">
                          <WiDegrees />
                        </span>
                      </h3>
                      <p>Temperature</p>
                    </div>
                  </div>
                </div>
                <div className="harvest">
                  <div className="harvest-chart">
                    <div className="har-vest">
                      <h5>Harvesting Cost</h5>
                      <div className="harvest-holder">
                        <div>
                          <h4>Wheat</h4>
                        </div>
                        <div>
                          <h4>$70K</h4>
                        </div>
                      </div>
                      <div className="border-line"></div>
                      <div className="harvest-holder">
                        <div>
                          <h4>Rice</h4>
                        </div>
                        <div>
                          <h4>$24K</h4>
                        </div>
                      </div>

                      <div className="estimate">
                        <h4>Total Estimate</h4>
                        <span className="dollars">$100K</span>
                      </div>
                    </div>

                    <div style={{ width: "70px", marginTop: "55px" }}>
                      <Chart type="pie" data={data} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainboard;
