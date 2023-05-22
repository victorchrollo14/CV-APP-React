import { Link } from "react-router-dom";
import "./template.css";
import { Header } from "./Header";
import { Resume } from "./Resume";

function Template() {
  return (
    <>
      <div className="template">
        <Header />
        <div className="resume-wrapper">
          <Resume />
        </div>
      </div>
    </>
  );
}

export default Template;
