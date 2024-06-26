// src/App.js or any other component file
import React, { useEffect, useState } from "react";
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
  const [attendees, setAttendees] = useState("1-2");
  const [month, setMonth] = useState("Nov 2024");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [urlError, setUrlError] = useState(false);

  const positions = ["1-2", "3-4", "5-6"];
  const monthOptions = ["Nov 2024", "Dec 2024", "Jan 2025", "Feb 2025"];
  const attendeesOptions = ["1-2", "3-4", "5-6"];
  const techStack = [
    { name: "Frontend" },
    { name: "Backend" },
    { name: "UX" },
    { name: "UI" },
    { name: "Motion" },
    { name: "Film" },
  ];

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    let hasErrors = false;

    if (name.trim().length === 0) {
      console.error("Company Name empty: ", name);
      setNameError(true);
      hasErrors = true;
    }

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(contact)) {
      console.error("INVALID EMAIL: ", contact);
      setContactError(true);
      console.log(contactError);
      hasErrors = true;
    }

    let finalUrl;
    const validateUrl = (value) => {
      finalUrl = value;
      const regexp =
        /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;

      if (!value.startsWith("http://") && !value.startsWith("https://")) {
        finalUrl = "https://" + value;
      }

      if (!regexp.test(finalUrl)) {
        return false;
      }

      try {
        new URL(finalUrl);
      } catch (error) {
        console.error("INVALID URL: ", finalUrl);
        return false;
      }

      return true;
    };

    if (!validateUrl(url)) {
      setUrlError(true);
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    // Proceed with your Supabase insert operation
    const { error } = await supabase.from("companies").insert([
      {
        name,
        contact,
        url: finalUrl,
        role,
        position,
        tech,
        attendees,
        month,
      },
    ]);
    if (error) console.error("Error inserting data: ", error);
    else console.log("Data inserted successfully");
    setIsSubmitted(true);
  };
  useEffect(() => {}, [contactError]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-6 gap-6 md:px-0 md:w-[612px]"
        noValidate
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name-input">FÖRETAG</label>
          <TextInput
            id="name-input"
            className={`text-black ${
              nameError ? "border border-red-500" : "border-none"
            } shadow`}
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
            className={`text-black ${
              contactError ? "border-red-500" : "border-none"
            } shadow`}
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
            className={`text-black ${
              urlError ? "border-red-500" : "border-none "
            } shadow`}
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="https://foretag.se"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="attendees">HUR MÅNGA KOMMER?</label>
          <CheckBoxGrid>
            <div>
              <select
                className="border-none py-0 pl-0"
                id="attendees"
                onChange={(event) => setAttendees(event.target.value)}
                defaultValue={attendeesOptions[0]}
              >
                {attendeesOptions.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </CheckBoxGrid>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label htmlFor="platser" className="w-1/2">
              ANTAL LIA-PLATSER
            </label>
            <label htmlFor="fromMonth" className="w-1/2">
              START
            </label>
          </div>
          <CheckBoxGrid>
            <div className="flex justify-evenly">
              <div className="w-1/2">
                <select
                  className="border-none py-0  pl-0"
                  id="platser"
                  onChange={(event) => setPosition(event.target.value)}
                  defaultValue={positions[0]}
                >
                  {positions.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                <select
                  className="border-none py-0 pl-2"
                  id="fromMonth"
                  onChange={(event) => setMonth(event.target.value)}
                  defaultValue={monthOptions[0]}
                >
                  {monthOptions.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CheckBoxGrid>
        </div>
        <div className="flex flex-col gap-2">
          <span>VI TAR EMOT</span>
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
          <span>VI JOBBAR MED</span>
          <CheckBoxGrid rows="grid-rows-2" cols="grid-cols-3" gap="gap-4">
            {techStack.map((tech) => {
              return (
                <div key={tech.name} className="flex gap-2 relative">
                  <CheckboxInput
                    id={`${tech.name}-checkbox`}
                    value={tech.name}
                    onChange={handleTechChange}
                  />
                  <label htmlFor={`${tech.name}-checkbox`}>{tech.name}</label>
                  <CheckboxChecked />
                  <CheckboxUnchecked />
                </div>
              );
            })}
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
