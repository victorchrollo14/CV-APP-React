import { ReactDOM, useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Template from "./Template/Template";
import { initialUserInfo, initEduList, initWorkList, initSkills } from "./data";

export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  return (
    <UserContext.Provider value={userInfo}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
