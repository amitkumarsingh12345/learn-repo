import React from "react";
import Header from "./User/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nabtav from "./User/Nabtav";
import Sidebar from "./User/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:id" element={<Nabtav props="Nabtav"/>}></Route> 
        <Route path="/subject/:sub" element={<Sidebar />}></Route>  
      </Routes>
    </BrowserRouter>
  )
}
export default App;
