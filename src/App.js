import { Route, Routes } from "react-router-dom";
import "./App.css";
import Borders from "./components/Borders";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Colors from "./components/Colors";
import Dashboard from "./components/Dashboard";
import Menubar from "./components/Menubar";
// import * as Icon from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";

function App() {
  return (
    <div className="container">
      
      <Menubar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/borders" element={<Borders />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
