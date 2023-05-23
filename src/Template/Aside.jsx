import { PersonalInfo } from "./PersonalInfo";
import { SkillsInfo } from "./SkillsInfo";

import { useContext } from "react";
import { UserContext } from "../App";

export function Aside() {
  const userInfo = useContext(UserContext);
  const { profilePic } = userInfo;

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
