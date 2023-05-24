import { ReactDOM, useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Template from "./Template/Template";
import { initialUserInfo, initEduList, initWorkList, initSkills } from "./data";

export const UserContext = createContext();
export const EduContext = createContext();
export const WorkContext = createContext();
export const SkillContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [eduList, setEduList] = useState(initEduList);
  const [workList, setworkList] = useState(initWorkList);
  const [skillList, setSkillList] = useState(initSkills);

  return (
    <UserContext.Provider value={userInfo}>
      <EduContext.Provider value={eduList}>
        <WorkContext.Provider value={workList}>
          <SkillContext.Provider value={skillList}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/template" element={<Template />} />
              </Routes>
            </BrowserRouter>
          </SkillContext.Provider>
        </WorkContext.Provider>
      </EduContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
