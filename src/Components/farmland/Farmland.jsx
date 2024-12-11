import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Farmland() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [farmers, setFarmers] = useState([]);

  // Fetch farmer data
  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await axios.get(
          "https://agriculture-server-beta.onrender.com/api/v1/admin/analytics"
        );
        setFarmers(response.data); 
      } catch (error) {
        console.error("Error fetching farmers:", error);
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
          <h2>Farmers Table</h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Location</th>
                  <th>DOB</th>
                  <th>State of Origin</th>
                  <th>Local Govt</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {farmers.map((farmer, index) => (
                  <tr key={farmer.id}>
                    <td>{index + 1}</td>
                    <td>{farmer.name}</td>
                    <td>{farmer.email}</td>
                    <td>{farmer.phone}</td>
                    <td>{farmer.address}</td>
                    <td>{farmer.location}</td>
                    <td>{farmer.dob}</td>
                    <td>{farmer.stateOfOrigin}</td>
                    <td>{farmer.localGovt}</td>
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
                                to={`/farm/${farmer.id}`}
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
