import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx"
import Home from "./Pages/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;