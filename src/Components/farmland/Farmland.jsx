import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Farmland() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [farmers, setFarmers] = useState([]); // Make sure the state is named "farmers" or "users"

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let token = localStorage.getItem("token");

        const response = await axios.get(
          "https://agriculture-server-beta.onrender.com/api/v1/admin/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data);
        setFarmers(response.data.data); // Make sure to set the state correctly
      } catch (error) {
        console.error("Error fetching summary data:", error);
      }
    };

    fetchUsers();
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
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {farmers.length > 0 ? (
                  farmers.map((farmer, index) => (
                    <tr key={farmer._id}>
                      <td>{index + 1}</td>
                      <td>{farmer.profile.firstName}</td>
                      <td>{farmer.profile.lastName}</td>
                      <td>{farmer.email}</td>
                      <td>{farmer.profile.address || "Not available"}</td>{" "}
                      <td>{farmer.role}</td>
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
                                  to={`/farm/${farmer._id}`}
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
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center" }}>
                      No data available
                    </td>
                  </tr>
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
