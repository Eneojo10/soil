import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"; 


function Farmland() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [landData, setLandData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmers = async () => {
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
        setLandData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data.");
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

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
          <h2>Test Request</h2>
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
                {loading ? (
                  <tr>
                    <td colSpan="5" className="loading">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="5" className="error">{error}</td>
                  </tr>
                ) : (
                  landData.map((land, index) => (
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
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                          </button>
                          {dropdownVisible === index && (
                            <ul className="dropdown-menu">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to={`/farm/${land._id}`} // Assuming you pass farm ID to view
                                >
                                  VIEW
                                </Link>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
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
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farmland;
