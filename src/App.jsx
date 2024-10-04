import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "navbar/Navbar"
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';
import "./index.css"
import Personajes from 'personajes/Personajes';  
import Detalle from 'detalle/Detalle';  
const App = () => (
  <>
  <Router>
      <Navbar />
      <Routes>
      <Route path="/personajes" element={<Personajes />} />
      <Route path="/personajes/:id" element={<Detalle />} />
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  
  </>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)