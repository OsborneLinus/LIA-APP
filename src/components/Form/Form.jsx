// src/App.js or any other component file
import React, { useState } from "react";
import supabase from "../../services/supabase";
import { CheckBoxContainer } from "./CheckBoxContainer";
import { TextInput } from "./TextInput";

function Form() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [url, setUrl] = useState("");
  const [role, setRole] = useState([]);
  const [tech, setTech] = useState([]);
  const [position, setPosition] = useState("");
  const positions = [0, 1, 2, 3, 4, 5, 6, 7];

  const handleRoleChange = (event) => {
    if (event.target.checked) {
      setRole((prevRole) => [...prevRole, event.target.value]);
    } else {
      setRole((prevRole) =>
        prevRole.filter((value) => value !== event.target.value)
      );
    }
  };

  const handleTechChange = (event) => {
    if (event.target.checked) {
      setTech((prevTech) => [...prevTech, event.target.value]);
    } else {
      setTech((prevTech) =>
        prevTech.filter((value) => value !== event.target.value)
      );
    }
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await supabase.from("companies").insert([
      {
        name,
        contact,
        url,
        role: role.join(", "),
        position,
        tech: tech.join(", "),
      },
    ]);
    if (error) console.error("Error inserting data: ", error);
    else console.log("Data inserted successfully");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name-input">FÖRETAG</label>
          <TextInput
            id="name-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Företagsnamn"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-input">KONTAKT</label>
          <TextInput
            id="contact-input"
            className="text-black"
            type="email"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            placeholder="namn@foretag.se"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="url-input">WEBBSIDA</label>
          <TextInput
            id="url-input"
            className="text-black"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://foretag.se"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>LIA</span>
          <CheckBoxContainer>
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
          </CheckBoxContainer>
        </div>
        <div className="flex flex-col gap-2">
          <span>VI TAR EMOT</span>
          <CheckBoxContainer>
            <input
              type="checkbox"
              value="Webbutveckling"
              id="webbutveckling"
              onChange={handleRoleChange}
            />
            <label htmlFor="webbutveckling">Webbutvecklare</label>
            <input
              type="checkbox"
              value="Designer"
              name="designer"
              id="designer"
              onChange={handleRoleChange}
            />
            <label htmlFor="designer">Digital Designer</label>
          </CheckBoxContainer>
        </div>
        <div className="flex flex-col gap-2">
          <span>ÖNSKADE KOMPETENSER</span>
          <CheckBoxContainer>
            <input
              type="checkbox"
              value="Frontend"
              id="frontend-checkbox"
              onChange={handleTechChange}
            />
            <label htmlFor="frontend-checkbox">Frontend</label>
            <input
              type="checkbox"
              value="UX"
              id="ux-checkbox"
              onChange={handleTechChange}
            />
            <label htmlFor="ux-checkbox">UX</label>
            <input
              type="checkbox"
              value="UI"
              id="ui-checkbox"
              onChange={handleTechChange}
            />
            <label htmlFor="ui-checkbox">UI</label>
            <input
              type="checkbox"
              value="Backend"
              id="backend-checkbox"
              onChange={handleTechChange}
            />
            <label htmlFor="backend-checkbox">Backend</label>
            <input
              type="checkbox"
              value="Film"
              id="film-checkbox"
              onChange={handleTechChange}
            />
            <label htmlFor="film-checkbox">Film</label>
            <input
              type="checkbox"
              value="Motion"
              id="motion-checkbox"
              onChange={handleTechChange}
            />
            <label htmlFor="motion-checkbox">Motion</label>
          </CheckBoxContainer>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;
