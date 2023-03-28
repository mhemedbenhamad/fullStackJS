import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from "./Acceuil";
import Apropos from "./Apropos";
import Etudiant from "./Etudiant";
import Enseignants from "./Enseignants";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Acceuil />} />
          <Route exact path="Acceuil" element={<Acceuil />} />
          <Route exact path="Etudiant" element={<Etudiant />} />
          <Route exact path="Enseignants" element={<Enseignants />} />
          <Route exact path="Apropos" element={<Apropos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
