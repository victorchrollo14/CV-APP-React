import { AddButton, DeleteButton } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";

export function SkillsSection() {
  return (
    <section className="form-sections edu-section">
      <Heading>Skills</Heading>
      <Input>Add Skill </Input>
      <AddButton />
      <DeleteButton />
    </section>
  );
}
