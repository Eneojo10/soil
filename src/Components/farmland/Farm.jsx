import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Farmland() {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownVisible((prev) => (prev === index ? null : index));
  };

  return (
    <div className="tab-flex">
      <div className="dash-board">
        <Dashboard />
      </div>
      <div className="tb">
        <div className="containerk">
          <h2>Farmers Table</h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Longtitude/Latitude</th>
                  <th>image</th>
                  <th>Brief Description</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>Green Acres</td>
                    <td>California</td>
                    <td>200</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    <td>John Doe</td>
                    
                    <td>
                      <div className="dropdown">
                        <button
                          className="dropdown-btn btn-sm"
                          type="button"
                          onClick={() => toggleDropdown(index)}
                        >
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                        {dropdownVisible === index && (
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/farm"
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
                                onClick={() => alert("Edit functionality here")}
                              >
                                EDIT
                              </button>
                            </li>
                          </ul>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farmland;
