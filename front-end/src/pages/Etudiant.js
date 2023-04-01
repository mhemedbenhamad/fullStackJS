import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Table from "react-bootstrap/Table";

function Etudiant() {
  var [listEtudiant, setListEtudiant] = useState([]);
  async function selectEtudiants() {
    let apiUrl = "http://127.0.0.1:3000/data";
    console.warn(apiUrl);
    let result = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "content-type": "application json",
        Accept: "application json",
      },
    });
    result = await result.json();
    setListEtudiant(result.data);
    console.warn("bbbbbb");
    console.warn(Json.stringify(listEtudiant));
    return false;
  }
}

export default Etudiant;
