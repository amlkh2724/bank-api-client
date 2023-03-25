import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GitAllPeople.css";

const GitAllPeople = () => {
  const [allAccounts, setAllAccounts] = useState([]);
  const [copyId, setCopyId] = useState("");
  const [idDelete, setIdToDelete] = useState("");

  const handleCopyClick = (id) => {
    navigator.clipboard.writeText(id);
  };

  const handleMouseEnter = (id) => {
    setCopyId(id);
  };

  const handleMouseLeave = () => {
    setCopyId("");
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios.get(
        "https://vast-cyan-macaw-kit.cyclic.app/users"
      );
      const allAccounts = response.data.data;
      console.log("All accounts:", allAccounts);

      // Log the cash value of each user
      allAccounts.forEach((user) => {
        console.log(`${user.name}: has $${user.cash} in cash.`);
      });

      setAllAccounts(allAccounts);
    };

    getAllUsers();
  }, []);
  
  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `https://vast-cyan-macaw-kit.cyclic.app/users/${userId}`
      );
      setAllAccounts((prevAccounts) =>
        prevAccounts.filter((user) => user.id !== userId)
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="allUsers">
      {allAccounts.map((user) => (
        <div key={user.id}>
          <ul className="containerUl">
            <li className="containerLi">
              {user.name}{" "}
              <span
                className="styleid"
                onMouseEnter={() => handleMouseEnter(user.id)}
                onMouseLeave={handleMouseLeave}
              >
                {user.id}
                {copyId === user.id && (
                  <button onClick={() => handleCopyClick(user.id)}>Copy</button>
                )}
              </span>
              has{" "}
              <span className={user.cash < 0 ? "red" : "green"}>
                ${user.cash}
              </span>{" "}
              in cash and <span className="green">{user.credit}</span> in credit
              card
              <Link to={`/transactions/${user.id}`}>
                <button>transfer</button>
              </Link>
              <Link to={`/deposit/${user.id}`}>
                <button>deposit</button>
              </Link>
              <Link to={`/withdraw/${user.id}`}>
                <button>withdraw</button>
              </Link>
              <button onClick={() => deleteUser(user.id)}>x</button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GitAllPeople;
