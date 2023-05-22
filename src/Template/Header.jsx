import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="header">
      <h1>Template Preview</h1>
      <button className="preview-btn">
        <Link to="/" className="links">Go Back</Link>
      </button>
    </header>
  );
}


