import { EduSection } from "./EducationSection";
import { ExpSection } from "./ExperienceSection";
import { Heading } from "./Heading";
import { ImageUpload } from "./ImageUpload";
import { Input } from "./Input";

export function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="main-body">
        <form action="" className="form" onSubmit={handleSubmit}>
          <section className="Info-section form-sections">
            <Heading>Personal Information</Heading>
            <Input>Full Name</Input>
            <Input>Profession</Input>
            <Input>Phone Number</Input>
            <Input>Email</Input>
            <textarea
              name="Description"
              className="input-des"
              id="Description"
              placeholder="Description"
              cols="30"
              rows="10"
            ></textarea>
            <div className="upload-section">
              <ImageUpload>Upload Profile Pic</ImageUpload>
              <ImageUpload>Upload Banner</ImageUpload>
            </div>
          </section>
          <EduSection />
          <ExpSection />
        </form>
      </div>
    </>
  );
}
