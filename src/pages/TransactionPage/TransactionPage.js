import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TransactionPage = () => {
  const [idFrom, setIdFrom] = useState("");
  const [idTo, setIdTo] = useState("");
  const [cash, setCash] = useState("");
  const [isTransfer, setIsTransfer] = useState("");
  const [isTransferSuccess, setIsTransferSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `https://vast-cyan-macaw-kit.cyclic.app//users/transfer/${idFrom}/${idTo}/${cash}`
      );
      console.log(response.data);
      setIsTransfer("");
      setIsTransferSuccess(true);
    } catch (error) {
      setIsTransfer("Check your balance transfer filed");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Transfer Money</h2>
      <form onSubmit={handleSubmit}>
        {isTransfer && (
          <p style={{ color: "red", fontWeight: "bold" }}>{isTransfer}</p>
        )}
        {isTransferSuccess && (
          <p style={{ color: "green", fontWeight: "bold" ,fontSize:"1.4rem"}}>Transfer successful!</p>
        )}
        <div>
          <label htmlFor="id-from">From:</label>
          <input
            type="text"
            id="id-from"
            value={idFrom}
            onChange={(event) => setIdFrom(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="id-to">To:</label>
          <input
            type="text"
            id="id-to"
            value={idTo}
            onChange={(event) => setIdTo(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cash">Cash:</label>
          <input
            type="number"
            id="cash"
            value={cash}
            onChange={(event) => setCash(event.target.value)}
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default TransactionPage;
