import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import ImageUpload from "./components/upload/ImageUpload";

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageUpload />
    </div>
  );
};

export default App;
