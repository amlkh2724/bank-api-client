import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Withdraw.css";
import { Link } from "react-router-dom";
const Withdraw = () => {
  const [id, setid] = useState("");
  const [cash, setCash] = useState("");
  const [isTransfer, setIsTransfer] = useState("");
  const [isTransferSuccess, setIsTransferSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://vast-cyan-macaw-kit.cyclic.app//users/withdraw/${id}/${cash}`
      );
      console.log(response.data);
      setIsTransfer("");
      setIsTransferSuccess(true);
    } catch (error) {
      setIsTransfer("Check your balance withdraw filed");

      console.error(error);
      
    }
  };

  return (
    <div className="container">
      <h1>withdraw</h1>
      <form onSubmit={handleSubmit}>
      {isTransfer && (
          <p style={{ color: "red", fontWeight: "bold" }}>{isTransfer}</p>
        )}
        {isTransferSuccess && (
          <p style={{ color: "green", fontWeight: "bold" }}>Withdraw successful!</p>
        )}
        <div>
          <label htmlFor="idWithdray">Id</label>
          <input
            type="text"
            id="idWithdray"
            value={id}
            onChange={(e) => setid(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="cashWithdraw">cash</label>
          <input
            type="text"
            id="cashWithdraw"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
          ></input>
        </div>
        <button type="submit">withdraw</button>
      </form>
      <Link to="/">back to home page</Link>
    </div>
  );
};
export default Withdraw;
