import { AddButton, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";

export function EduSection() {
  return (
    <section className="form-sections edu-section">
      <Heading>Education</Heading>
      <Input>Degree </Input>
      <div className="same-row">
        <Input>From</Input>
        <Input>To</Input>
      </div>
      <Input>Subject Name</Input>
      <Input>University/School Name</Input>
      <div className="same-row">
        <AddButton />
        <DeleteButton />
      </div>
    </section>
  );
}
