import { Input } from "./Input";
import { Heading } from "./Heading";
import { ImageUpload } from "./ImageUpload";
import { useContext } from "react";
import { UserContext } from "../App";

export function PersonalSection() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { fullName, profession, phone, email, description } = userInfo;

  const handleNameChange = (e) => {
    setUserInfo({ ...userInfo, fullName: e.target.value });
  };

  const handleProfChange = (e) => {
    setUserInfo({ ...userInfo, profession: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setUserInfo({ ...userInfo, phone: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const handleDes = (e) => {
    setUserInfo({ ...userInfo, description: e.target.value });
  };

  return (
    <section className="Info-section form-sections">
      <Heading>Personal Information</Heading>
      <Input name={fullName} onChange={handleNameChange}>
        Full Name
      </Input>
      <Input name={profession} onChange={handleProfChange}>
        Profession
      </Input>
      <Input name={phone} onChange={handlePhoneChange}>
        Phone Number
      </Input>
      <Input name={email} onChange={handleEmailChange}>
        Email
      </Input>
      <textarea
        name="Description"
        onChange={handleDes}
        className="input-des"
        id="Description"
        placeholder="Description"
        cols="30"
        rows="10"
        value={description}
      ></textarea>
      <div className="upload-section">
        <ImageUpload>Upload Profile Pic</ImageUpload>
        <ImageUpload>Upload Banner</ImageUpload>
      </div>
    </section>
  );
}
