import { EduContext } from "../App";
import { AddButton, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import { useContext, useState } from "react";

let initialObj = {
  degree: "",
  from: "",
  to: "",
  subject: "",
  university: "",
};

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
  const [tempObj, setTempObj] = useState(initialObj);

  const handleDegChange = (e) => {
    setTempObj({ ...tempObj, degree: e.target.value });
  };

  const handleFromChange = (e) => {
    setTempObj({ ...tempObj, from: e.target.value });
  };

  const handleToChange = (e) => {
    setTempObj({ ...tempObj, to: e.target.value });
  };

  const handleSubChange = (e) => {
    setTempObj({ ...tempObj, subject: e.target.value });
  };

  const handleUniChange = (e) => {
    setTempObj({ ...tempObj, university: e.target.value });
  };

  const addItem = () => {
    const { degree, from, to, subject, university } = tempObj;
    setEduList([
      ...eduList,
      {
        id: crypto.randomUUID(),
        degree: degree,
        from: from,
        to: to,
        subject: subject,
        university: university,
      },
    ]);
    setTempObj(initialObj);
  };

  const delItem = (e, id) => {
      setEduList((currentlist) => currentlist.filter(ed => ed.id !== id))
  }

  const list = eduList.map(({ id, degree, from, to, subject, university }) => {
    if (eduList) {
      return (
        <li key={id} >
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
            <DeleteButton onClick={(e) => delItem(e, id)} />
          </div>
        </li>
      );
    }
    return null;
  });

  return (
    <ul className="list gap-btw">
      <li>
        <Input name={tempObj.degree} onChange={handleDegChange}>
          Degree
        </Input>
        <div className="same-row">
          <Input name={tempObj.from} onChange={handleFromChange}>
            From
          </Input>
          <Input name={tempObj.to} onChange={handleToChange}>
            To
          </Input>
        </div>
        <Input name={tempObj.subject} onChange={handleSubChange}>
          Subject Name
        </Input>
        <Input name={tempObj.university} onChange={handleUniChange}>
          University/School Name
        </Input>
        <AddButton onClick={addItem} />
      </li>
      {list}
    </ul>
  );
}
