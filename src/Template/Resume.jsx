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
