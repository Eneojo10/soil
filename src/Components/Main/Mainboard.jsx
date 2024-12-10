import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import image from "../image/user2.jpg";
import image2 from "../image/soil.jpg";
import { WiDegrees } from "react-icons/wi";
import image3 from "../image/weather.png";
import { IoIosSearch } from "react-icons/io";
import Chart from "../Chart/Chart";
import image03 from "../image/leaf2.png";
import Hamburger from "../Hamburger/Hamburger"


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
                <IoIosSearch className="search-icon" />
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
                  <Hamburger/>
                </div>
              </div>
            </div>

            <div className="weathersummary">
              
              <div className="cl1">
                <h3>Summary</h3>
                <div className="color-flex">
                  <div className="color0001">
                    <div className="color01">
                      <div className="cp">
                        <h2>Total Farm</h2>
                        <h5>Hello World...</h5>
                        <p>
                          125 <span className="tons">Tons</span>
                        </p>
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
                            12%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="color02">
                    <div className="color01">
                      <div className="cp">
                        <h2>Farm Lands</h2>
                        <h5>Hello World...</h5>
                        <p>
                          980 <span className="tons">Tons</span>
                        </p>
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
                            40%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="color02">
                    <div className="color01">
                      <div className="cp">
                        <h2>Total Soil Test</h2>
                        <h5>Hello World...</h5>
                        <p>
                          980 <span className="tons">Tons</span>
                        </p>
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
                            40%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="color02">
                    <div className="color01">
                      <div className="cp">
                        <h2>Total Farm Request</h2>
                        <h5>Hello World...</h5>
                        <p>
                          980 <span className="tons">Tons</span>
                        </p>
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
                            40%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />

                <div>
                  <h3>Manage your Farm</h3>
                  <div className="rice-farm">
                    <img src={image2} alt="Rice farm" />
                    <div className="overlay-text"><h5>Manage Your Farm...</h5></div>
                  </div>
                </div>
                <br />
                <div>
                  <h3>Productive Analysis</h3>
                  <div className="product-flex">
                    <div className="product1">
                      <div className="date">
                        <h4>January 22</h4>
                        <br />
                        <div className="crops">
                          <div className="text-with-line">
                            <div className="progress-item">
                              <span className="progress-label">
                                Wheat - 40%
                              </span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill"
                                  style={{ width: "40%" }}
                                ></div>
                              </div>
                            </div>
                            {/* <br /> */}
                            <div className="progress-item">
                              <span className="progress-label">Rice - 59%</span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill1"
                                  style={{ width: "59%" }}
                                ></div>
                              </div>
                            </div>
                            {/* <br /> */}
                            <div className="progress-item">
                              <span className="progress-label">
                                Maize - 20%
                              </span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill01"
                                  style={{ width: "20%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product2">
                      <div className="date">
                        <h4>Febuary 22</h4>
                        <br />
                        <div className="crops">
                          <div className="text-with-line">
                            <div className="progress-item">
                              <span className="progress-label">
                                Wheat - 40%
                              </span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill"
                                  style={{ width: "40%" }}
                                ></div>
                              </div>
                            </div>
                            {/* <br /> */}
                            <div className="progress-item">
                              <span className="progress-label">Corn - 59%</span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill1"
                                  style={{ width: "59%" }}
                                ></div>
                              </div>
                            </div>
                            {/* <br /> */}
                            <div className="progress-item">
                              <span className="progress-label">
                                Barley - 20%
                              </span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill01"
                                  style={{ width: "20%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product3">
                      <div className="date">
                        <h4>Febuary 22</h4>
                        <br />
                        <div className="crops">
                          <div className="text-with-line">
                            <div className="progress-item">
                              <span className="progress-label">
                                Beans - 40%
                              </span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill"
                                  style={{ width: "40%" }}
                                ></div>
                              </div>
                            </div>
                            {/* <br /> */}
                            <div className="progress-item">
                              <span className="progress-label">Corn - 59%</span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill1"
                                  style={{ width: "59%" }}
                                ></div>
                              </div>
                            </div>
                            {/* <br /> */}
                            <div className="progress-item">
                              <span className="progress-label">
                                Potato - 20%
                              </span>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill01"
                                  style={{ width: "20%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><br/>
                <div className="soil-button">
                  <button className="soil-btn">Request for Soil Test</button>
                </div>
              </div>
              <div className="cl2">
                <h3>Weather Forecast</h3>
                <div className="color03">
                  <div className="weather-flex">
                    <div className="weather-img">
                      <img src={image3} alt="" />
                    </div>
                    <div className="today">
                      <h2>Today</h2>
                      <div className="weather-num-bers">
                        <h3>
                          37{" "}
                          <span className="num_bers">
                            <span className="w-degreess">
                              /123
                              {/* <WiDegrees /> */}
                            </span>
                          </span>
                          <span className="w-degrees">
                            <WiDegrees />
                          </span>
                        </h3>
                      </div>
                      <div className="today-flex">
                        <div>
                          <h5>Rainy</h5>
                        </div>
                        <div>
                          <h5>Cloudy</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                      <h4>Harvesting Cost</h4>
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

                    <div style={{ width: "80px",marginTop: "55px" }}>
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
