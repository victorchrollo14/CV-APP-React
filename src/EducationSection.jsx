import { AddButton, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";

import { ReactDOM, useState } from "react";

export function EduSection() {
  return (
    <section className="form-sections edu-section">
      <Heading>Education</Heading>
      <EduList />
    </section>
  );
}

function EduList() {
  const initial = { uid: crypto.randomUUID(), isShown: true };
  const [listarray, setListArray] = useState([initial]);

  function addItem() {
    setListArray([{ uid: crypto.randomUUID(), isShown: false }, ...listarray]);
  }

  function delItem(e, uid) {
    setListArray((currentlist) =>
      currentlist.filter((item) => {
        console.log(currentlist.length);
        if (item.uid !== uid || currentlist.length === 1 || item.isShown) {
          return item;
        }
      })
    );
  }

  const list = listarray.map((list) => {
    return (
      <li key={list.uid}>
        <Input>Degree </Input>
        <div className="same-row">
          <Input>From</Input>
          <Input>To</Input>
        </div>
        <Input>Subject Name</Input>
        <Input>University/School Name</Input>
        <div className="same-row">
          {list.isShown ? null : (
            <DeleteButton
              onClick={(e) => {
                delItem(e, list.uid);
              }}
            />
          )}
          {list.isShown ? <AddButton onClick={addItem} /> : null}
        </div>
      </li>
    );
  });

  return <ul className="list">{list}</ul>;
}
