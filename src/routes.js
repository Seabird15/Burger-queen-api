import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import { Login } from "./Pages/Login";
import Home from "./Pages/Home";
import ProductList from "./Components/Home";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/*FORMATO COMPONENTE*/}
        <Route path="/Home" element={<Home />} /> {/*FORMATO COMPONENTE*/}
        <Route path="/Products" element={<ProductList />} /> {/*FORMATO COMPONENTE*/}
      </Routes>
    </BrowserRouter>
  );
}
