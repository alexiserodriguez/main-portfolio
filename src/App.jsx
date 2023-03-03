import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ProjectDetail from './pages/ProjectDetail'

import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <main
        id="main1"
        className="bg-gradient-to-r from-bluedark via-blue to-bluedark h-screen "
      >
        <div className="min-h-screen container mx-auto max-w-xs lg:max-w-[1280px] sm:max-w-sm md:max-w-md ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
