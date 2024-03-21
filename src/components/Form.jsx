// src/App.js or any other component file
import React, { useState } from "react";
import supabase from "../services/supabase";

function Form() {
  const [name, setName] = useState("");
  const [role, setRole] = useState([]);
  const [position, setPosition] = useState("");
  const positions = [0, 1, 2, 3, 4, 5, 6, 7];

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setRole((prevRole) => [...prevRole, event.target.value]);
    } else {
      setRole((prevRole) =>
        prevRole.filter((value) => value !== event.target.value)
      );
    }
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from("companies")
      .insert([{ name, role: role.join(", "), position }]);
    if (error) console.error("Error inserting data: ", error);
    else console.log("Data inserted successfully");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          className="text-black"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        <div>
          <label htmlFor="webbutveckling">Webbutvecklare</label>
          <input
            type="checkbox"
            value="Webbutveckling"
            id="webbutveckling"
            onChange={handleCheckboxChange}
          />

          <label htmlFor="designer">Designer</label>
          <input
            type="checkbox"
            value="Designer"
            name="designer"
            id="designer"
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="flex flex-col text-black">
          <label htmlFor="platser">
            Platser:
            <select id="platser" onChange={handlePositionChange}>
              {positions.map((value) => (
                <option value={value} key={value}>
                  {value} platser
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;
