import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import DarkMode from "./components/DarkMode";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <main
        id="main1"
        className="bg-gradient-to-r from-bluedark via-blue to-bluedark h-screen dark:bg-gradient-to-r dark:from-[#E2E2E2] dark:via-[#FFFFFF] dark:to-[#E2E2E2]"
      >
        <div className="min-h-screen container mx-auto max-w-xs lg:max-w-[1280px] sm:max-w-sm md:max-w-md ">
          <div className="z-[9999] absolute mt-[20px] md:mt-[60px] ">
            <div className="absolute left-[235px] lg:left-[840px] md:left-[350px] sm:left-[290px] xl:left-[900px] ">
              <DarkMode />
            </div>
          </div>
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
