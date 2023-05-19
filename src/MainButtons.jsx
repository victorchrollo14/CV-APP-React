import { Button } from "./Button";

export function MainButtons() {
  return (
    <>
      <div className="main-buttons">
        <button type="submit" className="gen-btn btn">Generate Pdf </button>
        {/* <Button cname={"load-btn"} >Load Example</Button> */}
        <Button cname={"reset-btn"}>Reset</Button>
      </div>
    </>
  );
}
