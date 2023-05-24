import { useContext } from "react";
import { HeadingUnderLined } from "./Heading";
import { SkillContext } from "../App";

export function SkillsInfo() {
  const { skillList } = useContext(SkillContext);

  return (
    <div className="skills-info info-sections">
      <HeadingUnderLined>Skills</HeadingUnderLined>
      <ul className="list">
        {skillList.length > 0? skillList.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        }): <li>no skill</li> }
      </ul>
    </div>
  );
}
