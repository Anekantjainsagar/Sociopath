import React from "react";
import { Routes, Route } from "react-router";

import Login from "./Screen/Login";
import Register from "./Screen/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
