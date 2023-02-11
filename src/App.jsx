import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Newhere from "./Pages/Newhere";
import OurProgrammes from "./Pages/OurProgrammes";
import Resources from "./Pages/Resources";
import Give from "./Pages/Give";
import Watchlive from "./Pages/Watchlive";
import Pledge from "./Pages/Pledge";
import DesktopNavbar from "./Components/Navbar/DesktopNavbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
// import Contactus from "./Components/ContactUs/Contactus";

function App() {
  return (
    <Router>
      <DesktopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Newhere />} />
        <Route path="/ourprogrammes" element={<OurProgrammes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/give" element={<Give />} />
        <Route path="/Pledge" element={<Pledge />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
