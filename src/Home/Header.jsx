import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="header" id="header">
        <h1>CV Builder</h1>
        {/* <Link to={"/template"} className="preview-btn">
          Preview
        </Link> */}
        <a href="#Resume-preview" className="preview-btn">
          {" "}
          Preview
        </a>
      </header>
    </>
  );
}
