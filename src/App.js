import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx"
import Home from "./Pages/Home/Home.jsx";
import Travel from "./Pages/Travel/Travel.jsx";
import "./Components/Footer/Footer.css"
import Food from "./Pages/Food/Food.jsx";
import Opinion from "./Pages/Opinion/Opinion.jsx";
import Life from "./Pages/Life/Life.jsx";
import Design from "./Pages/Design/Design.jsx";
import Technology from "./Pages/Technology/Technology.jsx";
import About from "./Pages/About/About.jsx";
import ScrollTop from "./Components/scroolTop/ScroolTop.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ScrollTop>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/food" element={<Food/>} />
          <Route path="/opinion" element={<Opinion/>} />
          <Route path="/life" element={<Life/>} />
          <Route path="/design" element={<Design/>} />
          <Route path="/tech" element={<Technology/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
        </ScrollTop>
      </BrowserRouter>
      </div>
  );
}

export default App;