import { Aside } from "./Aside";
import { Banner } from "./ResumeBanner";

export function Resume() {
  return (
    <section className="resume">
      <Banner />
      <div className="content">
        <Aside />
      </div>
    </section>
  );
}
