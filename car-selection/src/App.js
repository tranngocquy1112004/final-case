import React, { useState } from 'react';
function App() {
    const cars = ['Car1', 'Car2', 'Car3'];
    const colors = ['Red', 'Blue', 'Green']; 
  
    const [selectedCar, setSelectedCar] = useState(cars[0]); 
    const [selectedColor, setSelectedColor] = useState(colors[0]); 
  
    const handleCarChange = (e) => {
      setSelectedCar(e.target.value);
    };
  
    const handleColorChange = (e) => {
      setSelectedColor(e.target.value);
    };
  
  return (
    <div>
      <h2>Car Selection</h2>
      <div>
        <label>Select Car:</label>
        <select value={selectedCar} onChange={handleCarChange}>
          {cars.map((car) => (
            <option key={car} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Color:</label>
        <select value={selectedColor} onChange={handleColorChange}>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>You selected a {selectedColor} - {selectedCar}</p>
      </div>
    </div>
  );
          }



export default App;
