import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <h1>Template Preview</h1>

      <Link to="/" className="links preview-btn"  >
        Go Back
      </Link>
    </header>
  );
}
