// src/App.js or any other component file
import React, { useState } from "react";
import supabase from "../../services/supabase";
import { Button } from "../Common/Button";
import { CheckBoxGrid } from "./CheckBoxGrid";
import CheckboxChecked from "./CheckboxChecked";
import { CheckboxInput } from "./CheckboxInput";
import CheckboxUnchecked from "./CheckboxUnchecked";
import ConfirmationPage from "./ConfirmationPage";
import { TextInput } from "./TextInput";

function Form({}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [url, setUrl] = useState("");
  const [role, setRole] = useState([]);
  const [tech, setTech] = useState([]);
  const [position, setPosition] = useState("1-2");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const positions = ["1-2", "3-4", "5-6", "Vet ej"];

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
        role,
        position,
        tech,
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
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="px-4">LIA</span>
          <CheckBoxGrid>
            <label htmlFor="platser" className="px-0">
              Antal platser:
              <select
                className="border-none py-0"
                id="platser"
                onChange={handlePositionChange}
                defaultValue={positions[0]}
              >
                {positions.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </CheckBoxGrid>
        </div>
        <div className="flex flex-col gap-2">
          <span className="px-4">VI TAR EMOT</span>
          <CheckBoxGrid rows="grid-rows-1" cols="grid-cols-2" gap="gap-4">
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="webbutveckling"
                value="WU"
                onChange={handleRoleChange}
              />
              <label className="" htmlFor="webbutveckling">
                Webbutveckling
              </label>
              <CheckboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="designer"
                value="DD"
                onChange={handleRoleChange}
              />
              <label className="whitespace-nowrap" htmlFor="designer">
                Digital Designer
              </label>
              <CheckboxChecked />
              <CheckboxUnchecked />
            </div>
          </CheckBoxGrid>
        </div>
        <div className="flex flex-col gap-2">
          <span className="px-4">VI JOBBAR MED</span>
          <CheckBoxGrid rows="grid-rows-2" cols="grid-cols-3" gap="gap-4">
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="frontend-checkbox"
                value="Frontend"
                onChange={handleTechChange}
              />
              <label htmlFor="frontend-checkbox">Frontend</label>
              <CheckboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="ux-checkbox"
                value="UX"
                onChange={handleTechChange}
              />
              <label htmlFor="ux-checkbox">UX</label>
              <CheckboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="ui-checkbox"
                value="UI"
                onChange={handleTechChange}
              />
              <label htmlFor="ui-checkbox">UI</label>
              <CheckboxChecked />
              <CheckboxUnchecked />
            </div>

            <div className="flex gap-2 relative">
              <CheckboxInput
                id="backend-checkbox"
                value="Backend"
                onChange={handleTechChange}
              />
              <label htmlFor="backend-checkbox">Backend</label>
              <CheckboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="film-checkbox"
                value="Film"
                onChange={handleTechChange}
              />
              <label htmlFor="film-checkbox">Film</label>
              <CheckboxChecked />
              <CheckboxUnchecked />
            </div>
            <div className="flex gap-2 relative">
              <CheckboxInput
                id="motion-checkbox"
                value="Motion"
                onChange={handleTechChange}
              />{" "}
              <label htmlFor="motion-checkbox">Motion</label>
              <CheckboxChecked />
              <CheckboxUnchecked />
            </div>
          </CheckBoxGrid>
        </div>
        <div className="flex justify-end">
          <Button type="submit">ANMÄL</Button>
        </div>
        {isSubmitted && <ConfirmationPage setIsSubmitted={setIsSubmitted} />}
      </form>
    </div>
  );
}

export default Form;
