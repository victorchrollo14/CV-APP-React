import { SkillContext } from "../App";
import { Heading } from "./Heading";
import React, { useContext, useState } from "react";

export function SkillsSection() {
  const [newInput, setNewInput] = useState("");
  const { skillList, setSkillList } = useContext(SkillContext);

  const addInput = () => {
    if (newInput !== "") {
      setSkillList([...skillList, { id: crypto.randomUUID(), name: newInput }]);
      setNewInput("");
    }
  };

  const deleteInput = (id) => {
    setSkillList((currentlist) =>
      currentlist.filter((skill) => {
        if (skill.id !== id) {
          return skill;
        }
      })
    );
  };

  return (
    <section className="form-sections edu-section">
      <Heading>Skills</Heading>

      <div>
        <input
          placeholder="Enter a new skill"
          type="text"
          className="input-button margin"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button className={"btn add-btn"} onClick={addInput}>
          Add
        </button>

        {skillList.map((skill) => (
          <div key={skill.id}>
            <input
              type="text"
              value={skill.name}
              className="input-button margin"
              style={{ color: "white" }}
              readOnly
            />
            <button
              className={"btn del-btn"}
              onClick={() => deleteInput(skill.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
