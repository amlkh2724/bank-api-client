import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [cash, setCash] = useState("");
  const [credit, setCredit] = useState("");
  const [isTransfer, setIsTransfer] = useState("");
  const [isTransferSuccess, setIsTransferSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://vast-cyan-macaw-kit.cyclic.app/users", {
        name,
        cash,
        credit,
      });
      console.log("Body:");
      console.log(name, cash, credit);
      console.log("Response:");
      console.log(response.data);
      setIsTransfer("");
      setIsTransferSuccess(true);
    } catch (error) {
      setIsTransfer("adding name cash credit!");

      console.error("Axios error:", error);
    }
  };

  return (
    <div className='container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
      {isTransfer && (
          <p style={{ color: "red", fontWeight: "bold" }}>{isTransfer}</p>
        )}
        {isTransferSuccess && (
          <p style={{ color: "green", fontWeight: "bold" }}>singUp successful!</p>
        )}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cash">Cash:</label>
          <input
            type="number"
            id="cash"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="credit">Credit:</label>
          <input
            type="number"
            id="credit"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
     <Link to="/">back to home page</Link>
    </div>
  );
};

export default Signup;
