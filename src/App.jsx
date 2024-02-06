import { BrowserRouter, Route, Routes } from "react-router-dom"
import Knowledge from "./components/Knowledge"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Home from "./components/Home";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
