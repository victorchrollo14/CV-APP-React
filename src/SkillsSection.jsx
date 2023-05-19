import { AddButton, Button, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import React, { useState } from "react";

export function SkillsSection() {
  const [input, setInput] = useState([]);
  const [newInput, setNewInput] = useState("");

  const addInput = () => {
    if (newInput.trim() !== "") {
      setInput([...input, newInput]);
      setNewInput("");
    }
  };
  const deleteInput = (index) => {
    const updatedInput = input.filter((_, i) => i !== index);
    setInput(updatedInput);
  };
  /* const handleSkillChange = (index, value) => {
    const updatedInput = [...input];
    updatedInput[index] = value;
    setInput(updatedInput);
  }; */
  return (
    <section className="form-sections edu-section">
      <Heading>Skills</Heading>

      <div>
        <input
          type="text"
          className="input-button"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          placeholder="Enter a new skill"
        />
        <button className={"btn add-btn"} onClick={addInput}>Add</button>
        <ul>
          {input.map((input, index) => (
            <li style={{color:'white'}} key={index}>
              {input}
              <button className={"btn del-btn"} onClick={() => deleteInput(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
