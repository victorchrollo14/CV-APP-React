import profile from "./Assets/usopp.jpg";
import banner from "./Assets/moon4.jpg";

const initialUserInfo = {
  fullName: "Kimi No Na wa",
  profession: "Profession",
  phone: "873483XXXX",
  email: "something@gmail.com",
  description:
    "Experienced web developer skilled in front-end and back-end technologies, with a passion for creating dynamic and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various frameworks and libraries such as React and Angular. Collaborative team player with excellent communication skills, capable of translating client requirements into efficient and scalable web solutions.  ",
  profilePic: profile,
  bannerPic: banner,
};

const initEduList = [
  {
    id: crypto.randomUUID(),
    degree: "Degree Name",
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
    from: "20XX",
    to: "20XX",
    role: "POSITION/ROLE",
  },
];

const initSkills = [];

export { initialUserInfo, initEduList, initWorkList, initSkills };
