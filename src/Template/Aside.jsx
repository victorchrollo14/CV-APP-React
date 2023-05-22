import profilePic from "../Assets/usopp.jpg";

import { PersonalInfo } from "./PersonalInfo";
import { SkillsInfo } from "./SkillsInfo";

export function Aside() {
  return (
    <>
      <section className="aside">
        <div className="profile-part">
          <div className="circle-deco">
            <img src={profilePic} alt="profile Image" className="profile-pic" />
          </div>
        </div>
        <PersonalInfo />
        <SkillsInfo />
      </section>
    </>
  );
}
