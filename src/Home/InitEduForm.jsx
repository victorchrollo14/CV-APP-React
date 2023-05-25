import { Input } from "./Input";
import { AddButton } from "./Button";
import { useContext, useState } from "react";
import { EduContext } from "../App";

export function InitEduForm() {
  let initialObj = {
    degree: "",
    from: "",
    to: "",
    subject: "",
    university: "",
  };

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
  return (
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
  );
}
