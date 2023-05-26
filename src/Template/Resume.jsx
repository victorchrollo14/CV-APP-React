import { Aside } from "./Aside";
import { MainContent } from "./MainContent";
import { Banner } from "./ResumeBanner";

export function Resume() {
  return (
    <section className="resume">
      <Banner />
      <div className="content">
        <Aside />
        <MainContent />
      </div>
    </section>
  );
}

export function DownLoadResume() {
  return (
    <>
      <div className="wrapper" id="Resume-preview">
        <section className="resume" style={{ display: "" }}>
          <Banner />
          <div className="content">
            <Aside />
            <MainContent />
          </div>
        </section>
      
        <a href="#Main" className="back-to-top">Back to Top ↑</a> 

      </div>
    </>
  );
}
