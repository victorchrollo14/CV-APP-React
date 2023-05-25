import { useCallback, useContext, useState } from "react";
import { AddButton, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import { InitExpForm } from "./InitExpForm";
import { WorkContext } from "../App";

export function ExpSection() {
  return (
    <section className="exp-section form-sections">
      <Heading>Experience</Heading>
      <ExpList />
    </section>
  );
}

function ExpList() {
  const { workList, setWorkList } = useContext(WorkContext);

  const delItem = (id) => {
    setWorkList((currentlist) => currentlist.filter((work) => work.id !== id));
  };

  const itemsList = workList.map(({ id, company, from, to, city, role }) => {
    return (
      <li key={id}>
        <Input name={company}>Company </Input>
        <div className="same-row">
          <Input name={from}>From</Input>
          <Input name={to}> to</Input>
        </div>
        <Input name={city}>City </Input>
        <Input name={role}>Role</Input>
        <DeleteButton onClick={() => delItem(id)} />
      </li>
    );
  });

  return (
    <ul className="list">
      <InitExpForm />
      {itemsList}
    </ul>
  );
}
