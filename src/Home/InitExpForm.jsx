import { Input } from "./Input";
import { AddButton } from "./Button";
import { useContext, useState } from "react";
import { WorkContext } from "../App";

export function InitExpForm() {
  const initObj = {
    company: "",
    city: "",
    from: "",
    to: "",
    role: "",
  };

  const [inputObj, setInputObj] = useState(initObj);
  const { workList, setWorkList } = useContext(WorkContext);

  const handleComChange = (e) => {
    setInputObj({ ...inputObj, company: e.target.value });
  };

  const handleFromChange = (e) => {
    setInputObj({ ...inputObj, from: e.target.value });
  };

  const handleToChange = (e) => {
    setInputObj({ ...inputObj, to: e.target.value });
  };

  const handleCityChange = (e) => {
    setInputObj({ ...inputObj, city: e.target.value });
  };

  const handleRoleChange = (e) => {
    setInputObj({ ...inputObj, role: e.target.value });
  };

  const addItem = () => {
    const { company, city, from, to, role } = inputObj;
    setWorkList([
      ...workList,
      {
        id: crypto.randomUUID(),
        company: company,
        from: from,
        city: city,
        to: to,
        role: role,
      }
    ]);
  };

  return (
    <li>
      <Input name={inputObj.company} onChange={handleComChange}>
        Company
      </Input>
      <div className="same-row">
        <Input name={inputObj.from} onChange={handleFromChange}>
          From
        </Input>
        <Input name={inputObj.to} onChange={handleToChange}>
          to
        </Input>
      </div>
      <Input name={inputObj.city} onChange={handleCityChange}>
        City
      </Input>
      <Input name={inputObj.role} onChange={handleRoleChange}>
        Role
      </Input>
      <AddButton onClick={addItem} />
    </li>
  );
}
