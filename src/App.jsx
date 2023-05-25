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
  const [workList, setWorkList] = useState(initWorkList);
  const [skillList, setSkillList] = useState(initSkills);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <EduContext.Provider value={{ eduList, setEduList }}>
        <WorkContext.Provider value={{ workList, setWorkList }}>
          <SkillContext.Provider value={{skillList, setSkillList}}>
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
