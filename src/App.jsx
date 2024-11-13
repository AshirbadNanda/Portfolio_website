import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
