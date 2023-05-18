import { AddButton, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";

export function EduSection() {
  return (
    <section className="form-sections edu-section">
      <Heading>Education</Heading>
      <EduList />
      <AddButton />
    </section>
  );
}

function EduList() {
  return (
    <ul className="list">
      <li key={crypto.randomUUID()}>
        <Input>Degree </Input>
        <div className="same-row">
          <Input>From</Input>
          <Input>To</Input>
        </div>
        <Input>Subject Name</Input>
        <Input>University/School Name</Input>
        <DeleteButton />
      </li>
    </ul>
  );
}
