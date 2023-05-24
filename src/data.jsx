import profile from "./Assets/usopp.jpg";
import banner from "./Assets/moon4.jpg";

const initialUserInfo = {
  fullName: "",
  profession: "",
  phone: "",
  email: "",
  description:
    "",
  profilePic: profile,
  bannerPic: banner,
};

const initEduList = [
  {
    id: crypto.randomUUID(),
    degree: "Degree ",
    from: "20xx",
    to: "20xx",
    subject: "Subject",
    university: "University/School Name",
  },
];

const initWorkList = [
  {
    id: crypto.randomUUID(),
    company: "Company Name",
    city: "City Name",
    from: "20xx",
    to: "20xx",
    role: "POSITION/ROLE",
  },
];

const initSkills = [];

export { initialUserInfo, initEduList, initWorkList, initSkills };
