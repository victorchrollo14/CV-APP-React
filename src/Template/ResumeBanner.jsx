import { useContext } from "react";
import { UserContext } from "../App";
import { WrapperDesign } from "./Svg";

export function Banner() {
  const { userInfo } = useContext(UserContext);
  const { fullName, bannerPic } = userInfo;

  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerPic})` }}>
      <h1>{fullName}</h1>
      <WrapperDesign />
    </div>
  );
}
