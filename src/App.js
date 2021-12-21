import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import ImageUpload from "./components/upload/ImageUpload";
import ModelUpload from "./components/upload/ModelUpload";

const App = () => {
  const [showModelUpload, setModelUpload] = useState(true);

  const setModelUploadFunc = (isSelected) => {
    setModelUpload(!isSelected);
  };

  return (
    <div>
      <Navbar
        showModelFunc={setModelUploadFunc}
        showModelUpload={showModelUpload}
      />
      {showModelUpload ? (
        <ModelUpload showModelFunc={setModelUploadFunc} />
      ) : (
        <ImageUpload />
      )}
    </div>
  );
};

export default App;
