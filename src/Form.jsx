import { Heading } from "./Heading";
import { ImageUpload } from "./ImageUpload";
import { Input } from "./Input";

export function Form() {
  return (
    <>
      <div className="main-body">
        <form action="" className="form">
          <section className="Info-section form-sections">
            <Heading>Personal Information</Heading>
            <Input>First Name</Input>
            <Input>Last Name</Input>
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
        </form>
      </div>
    </>
  );
}
