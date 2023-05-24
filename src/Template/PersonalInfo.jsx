import { UserContext } from "../App";
import { HeadingUnderLined } from "./Heading";
import { useContext, useState } from "react";

export function PersonalInfo() {
  const { userInfo } = useContext(UserContext);
  const { phone, email } = userInfo;

  return (
    <div className="personal-info info-sections">
      <HeadingUnderLined>personal info</HeadingUnderLined>
      <h3 className="sub-heading">Phone:</h3>
      <h4 className="info-values">{phone}</h4>
      <h3 className="sub-heading">Email:</h3>
      <h4 className="info-values">{email}</h4>
    </div>
  );
}
