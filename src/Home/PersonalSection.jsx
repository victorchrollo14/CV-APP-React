import { Input } from "./Input";
import { Heading } from "./Heading";
import { ImageUpload } from "./ImageUpload";
import { useContext } from "react";
import { UserContext } from "../App";

export function PersonalSection() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { fullName, profession, phone, email, description } =
    userInfo;

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

  const handleProfileUpload = (e) => {
    let file = e.target.files[0];

    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        const imageurl = reader.result;
        setUserInfo({ ...userInfo, profilePic: imageurl });
      };
    }
  };

  const handleBannerUpload = (e) => {
    let banner = e.target.files[0];
    const reader = new FileReader();

    if (banner) {
      reader.readAsDataURL(banner);

      reader.onload = () => {
        const banUrl = reader.result;
        setUserInfo({ ...userInfo, bannerPic: banUrl });
      };
    }
  };

  return (
    <section className="Info-section form-sections">
      <Heading>Personal Information</Heading>
      <Input name={fullName} onChange={handleNameChange}>
        fullname
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
        <ImageUpload onChange={handleProfileUpload}>
          Upload Profile Pic
        </ImageUpload>
        <ImageUpload onChange={handleBannerUpload}>Upload Banner</ImageUpload>
      </div>
    </section>
  );
}
