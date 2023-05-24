import { Input } from "./Input";
import { Heading } from "./Heading";
import { ImageUpload } from "./ImageUpload";

export function PersonalSection() {
  return (
    <section className="Info-section form-sections">
      <Heading>Personal Information</Heading>
      <Input label="fullName">Full Name</Input>
      <Input label="profession">Profession</Input>
      <Input label="phone" >Phone Number</Input>
      <Input label="email" >Email</Input>
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
  );
}
