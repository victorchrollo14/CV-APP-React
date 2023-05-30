import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="header" id="header">
        <h1>CV Builder</h1>
        <a href="#Resume-preview" className="preview-btn">
          {" "}
          Preview
        </a>
      </header>
    </>
  );
}
