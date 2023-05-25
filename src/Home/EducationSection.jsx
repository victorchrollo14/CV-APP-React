import { EduContext } from "../App";
import { DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { InitEduForm } from "./InitEduForm";
import { Input } from "./Input";
import { useContext, useState } from "react";

export function EduSection() {
  return (
    <section className="form-sections edu-section">
      <Heading>Education</Heading>
      <EduList />
    </section>
  );
}

function EduList() {
  const { eduList, setEduList } = useContext(EduContext);

  const delItem = (id) => {
    setEduList((currentlist) => currentlist.filter((ed) => ed.id !== id));
  };

  const list = eduList.map(({ id, degree, from, to, subject, university }) => {
    if (eduList) {
      return (
        <li key={id}>
          <Input name={degree} read={true}>
            Degree{" "}
          </Input>
          <div className="same-row">
            <Input name={from} read={true}>
              From
            </Input>
            <Input name={to} read={true}>
              To
            </Input>
          </div>
          <Input name={subject} read={true}>
            Subject Name
          </Input>
          <Input name={university} read={true}>
            University/School Name
          </Input>
          <div className="same-row">
            <DeleteButton onClick={() => delItem(id)} />
          </div>
        </li>
      );
    }
    return null;
  });

  return (
    <ul className="list gap-btw">
      <InitEduForm />
      {list}
    </ul>
  );
}
