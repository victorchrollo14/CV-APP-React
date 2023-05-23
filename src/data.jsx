import profile from "./Assets/usopp.jpg";
import banner from "./Assets/moon4.jpg";

const initialUserInfo = {
  fullName: "Kimi No Na wa",
  profession: "Profession",
  phoneNum: "873483XXXX",
  email: "something@gmail.com",
  Description:
    "loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas repellat facilis reprehenderit placeat ipsum nesciunt quidem voluptatem voluptate. Odio quod iusto soluta consequatur maiores asperiores incidunt provident ipsam perferendis nihil! ",
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
