import { AddButton, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";

export function ExpSection() {
  return (
    <section className="exp-section form-sections">
      <Heading>Experience</Heading>
      <ExpList />
      <AddButton />
    </section>
  );
}

function ExpList() {
  return (
    <ul className="list">
      <li>
        <Input>Company </Input>
        <div className="same-row">
          <Input>From</Input>
          <Input>to</Input>
        </div>
        <Input>City </Input>
        <Input>Role</Input>
        <DeleteButton />
      </li>
    </ul>
  );
}
