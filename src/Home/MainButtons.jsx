import { Button } from "./Button";
import { DownLoadResume } from "../Template/Resume";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import { useContext } from "react";
import { UserContext } from "../App";

export function MainButtons() {
  const { userInfo } = useContext(UserContext);
  const { fullName } = userInfo;

  const genPdf = () => {
    const resume = document.querySelector(".resume");

    html2canvas(resume, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const img = new Image();
      img.src = imgData;

      img.onload = () => {
        const pdf = new jspdf("p", "mm", "a4", { dpi: 300 });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
        fullName ? pdf.save(`${fullName}.pdf}`) : pdf.save("resume.pdf");
      };
    });
  };

  return (
    <>
      <div className="main-buttons">
        <button type="submit" className="gen-btn btn" onClick={genPdf}>
          Generate Pdf
        </button>
        {/* <Button cname={"load-btn"} >Load Example</Button> */}
        <Button cname={"reset-btn"} onClick={() => window.location.reload()}>Reset</Button>
      </div>
    </>
  );
}

export function Template() {
  return (
    <section className="preview-template">
      <DownLoadResume />
    </section>
  );
}
