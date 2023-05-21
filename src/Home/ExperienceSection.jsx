import { useState } from "react";
import { AddButton, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";

export function ExpSection() {
  return (
    <section className="exp-section form-sections">
      <Heading>Experience</Heading>
      <ExpList />
    </section>
  );
}

function ExpList() {
  const initial = [{uid: crypto.randomUUID(), isShown: false}]
  const [inputarray, setInputArray] = useState(initial)
  

  const addItem = () => {
      setInputArray([{uid: crypto.randomUUID(), isShown: true}, ...inputarray])
  }

  const delItem = (e, uid) => {
      setInputArray((currentarray) => currentarray.filter(item => {
            if (item.uid !== uid) {
                return item;
            }
      }))
  }


  const itemsList = inputarray.map(input => {
    return (
       <li key={input.uid}>
        <Input>Company </Input>
        <div className="same-row">
          <Input>From</Input>
          <Input>to</Input>
        </div>
        <Input>City </Input>
        <Input>Role</Input>
        <div className="same-row1">
          {input.isShown? <DeleteButton onClick={e => delItem(e, input.uid)}/>: null}
          {input.isShown? null: <AddButton  onClick={addItem}/>}
        </div>
      </li>
    )
  })
  
  return (
    <ul className="list">
       {itemsList}
    </ul>
  );
}


