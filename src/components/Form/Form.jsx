// src/App.js or any other component file
import React, { useState } from "react";
import supabase from "../../services/supabase";
import ConfirmationPage from "./ConfirmationPage";
import { CheckBoxContainer } from "./CheckBoxGrid";
import { TextInput } from "./TextInput";
import { Button } from "./Button";
import CheboxChecked from "./CheckboxChecked";
import { CheckboxInput } from "./CheckboxInput";
import CheckboxUnchecked from "./CheckboxUnchecked";
import SaveTheDate from "../SaveTheDate";

function Form() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [url, setUrl] = useState("");
  const [role, setRole] = useState([]);
  const [tech, setTech] = useState([]);
  const [position, setPosition] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitted(true);
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
              <select
                className="border-none bg-input-grey py-0"
                id="platser"
                onChange={handlePositionChange}
              >
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
          <CheckBoxContainer rows="grid-rows-1" cols="grid-cols-2" gap="gap-4">
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="webbutveckling"
                value="Webbutveckling"
                onChange={handleRoleChange}
              />
              <label className="" htmlFor="webbutveckling">
                Webbutveckling
              </label>
              <CheboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="designer"
                value="Designer"
                onChange={handleRoleChange}
              />
              <label htmlFor="designer">Digital Designer</label>
              <CheboxChecked />
              <CheckboxUnchecked />
            </div>
          </CheckBoxContainer>
        </div>
        <div className="flex flex-col gap-2">
          <span>VI JOBBAR MED</span>
          <CheckBoxContainer rows="grid-rows-2" cols="grid-cols-3" gap="gap-4">
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="frontend-checkbox"
                value="Frontend"
                onChange={handleTechChange}
              />
              <label htmlFor="frontend-checkbox">Frontend</label>
              <CheboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="ux-checkbox"
                value="UX"
                onChange={handleTechChange}
              />
              <label htmlFor="ux-checkbox">UX</label>
              <CheboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="ui-checkbox"
                value="UI"
                onChange={handleTechChange}
              />
              <label htmlFor="ui-checkbox">UI</label>
              <CheboxChecked />
              <CheckboxUnchecked />
            </div>

            <div className="flex gap-2 relative">
              <CheckboxInput
                id="backend-checkbox"
                value="Backend"
                onChange={handleTechChange}
              />
              <label htmlFor="backend-checkbox">Backend</label>
              <CheboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="film-checkbox"
                value="Film"
                onChange={handleTechChange}
              />
              <label htmlFor="film-checkbox">Film</label>
              <CheboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="motion-checkbox"
                value="Motion"
                onChange={handleTechChange}
              />{" "}
              <label htmlFor="motion-checkbox">Motion</label>
              <CheboxChecked />
              <CheckboxUnchecked />
            </div>
          </CheckBoxContainer>
        </div>
        <div className="flex justify-end">
          <Button type="submit">ANMÄL</Button>
        </div>
        {isSubmitted && <ConfirmationPage setIsSubmitted={setIsSubmitted} />}
      </form>
      <SaveTheDate>
        Mingel mellan bransch och studerande Webbutvecklare och Digital
        Designers på Yrgo
      </SaveTheDate>
    </div>
  );
}

export default Form;
