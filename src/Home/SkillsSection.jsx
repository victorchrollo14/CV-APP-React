import { AddButton, Button, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import React, { useState } from "react";

export function SkillsSection() {
  const [skillinput, setskillInput] = useState([]);
  const [newInput, setNewInput] = useState("");

  const addInput = () => {
    if (newInput.trim() !== "") {
      setskillInput([...skillinput, newInput]);
      setNewInput("");
    }
  };
  const deleteInput = (index) => {
    const updatedInput = skillinput.filter((_, i) => i !== index);
    setskillInput(updatedInput);
  };
  return (
    <section className="form-sections edu-section">
      <Heading>Skills</Heading>

      <div>
        <input
          type="text"
          className="input-button margin"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          placeholder="Enter a new skill"
        />
        <button className={"btn add-btn"} onClick={addInput}>
          Add
        </button>

        {skillinput.map((element, index) => (
          <div key={index}>
            <input
              type="text"
              value={element}
              className="input-button margin"
              style={{ color: "white" }}
            />
            <button
              className={"btn del-btn"}
              onClick={() => deleteInput(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
