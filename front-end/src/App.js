import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Acceuil, Enseignants, Etudiant, Apropos, Navbar } from "./pages/index";

const App = () => {
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
};

export default App;
