import { PersonalInfo } from "../Template/PersonalInfo";
import { EduSection } from "./EducationSection";
import { ExpSection } from "./ExperienceSection";
import { Heading } from "./Heading";
import { ImageUpload } from "./ImageUpload";
import { Input } from "./Input";
import { MainButtons } from "./MainButtons";
import { PersonalSection } from "./PersonalSection";
import { SkillsSection } from "./SkillsSection";

export function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="main-body">
        <form action="" className="form" onSubmit={handleSubmit}>
          <PersonalSection />
          <EduSection />
          <ExpSection />
          <SkillsSection />
          <MainButtons />
        </form>
      </div>
    </>
  );
}
