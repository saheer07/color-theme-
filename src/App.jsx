import React, { useState } from "react";

function App() {
  const [inputColor, setInputColor] = useState("")
  const [colors, setColors] = useState([])

  const handleChange = (e) => {
    setInputColor(e.target.value);
  }

  const handleSubmit = () => {
    if (inputColor.trim() === "") return; 
    setColors((prevColors) => [...prevColors, inputColor]);
    setInputColor("")
  }
  return (
    <div >
      <input
        type="text"
        placeholder="Type color"
        value={inputColor}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            style={{
              border: "1px",
              border :'solid',
              width: "100px",
              height: "100px",
              backgroundColor: colors[index] || "white", 
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
