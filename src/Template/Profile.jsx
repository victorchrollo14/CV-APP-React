import { useContext } from "react";
import { MainHeading } from "./Heading";
import { UserContext } from "../App";

export function Profile() {
  const { userInfo } = useContext(UserContext);
  const { description } = userInfo;

  return (
    <div className="profile-section main-sections">
      <MainHeading>Profile</MainHeading>
      <p className="description main-child">
        {description
          ? description
          : "Experienced web developer skilled in front-end and back-end technologies, with a passion for creating dynamic and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various frameworks and libraries such as React and Angular. Collaborative team player with excellent communication skills, capable of translating client requirements into efficient and scalable web solutions.  "}
      </p>
    </div>
  );
}
