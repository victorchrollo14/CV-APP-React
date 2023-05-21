import { ReactDOM } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home/Home"
import Template from "./Template/Template"

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/template" element={<Template />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App