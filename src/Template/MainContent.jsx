import { Profile } from "./Profile";
import { WorkSection } from "./WorkSection";
import { EduSection } from "./EduSection";

export function MainContent() {
  return (
    <>
      <section className="main-content">
        <Profile />
        <WorkSection />
        <EduSection />
      </section>
    </>
  );
}
