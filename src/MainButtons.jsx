import { Button } from "./Button";

export function MainButtons() {
  return (
    <>
      <div className="main-buttons">
        <Button cname={"gen-btn"}>Generate Pdf</Button>
        {/* <Button cname={"load-btn"} >Load Example</Button> */}
        <Button cname={"reset-btn"}>Reset</Button>
      </div>
    </>
  );
}
