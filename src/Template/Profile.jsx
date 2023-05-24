import { useContext } from "react";
import { MainHeading } from "./Heading";
import { UserContext } from "../App";

export function Profile() {
  const { userInfo } = useContext(UserContext);
  const { description } = userInfo;

  return (
    <div className="profile-section main-sections">
      <MainHeading>Profile</MainHeading>
      <p className="description main-child">{description}</p>
    </div>
  );
}
