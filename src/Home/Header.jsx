import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="header">
        <h1>CV Builder</h1>
        <Link to={"/template"} className="preview-btn">
          Preview
        </Link>
      </header>
    </>
  );
}
