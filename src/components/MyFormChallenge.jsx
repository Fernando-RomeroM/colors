import React, { useState, useRef } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputColor, setInputColor] = useState('');
  const refs = useRef(colors.map(() => React.createRef()));

  const handleInputChange = (e) => {
    setInputColor(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input type="text" value={inputColor} onChange={handleInputChange} />
      <div className="box-container">
        {colors.map((color, index) => (
          <BoxColor
            key={color}
            color={color}
            inputColor={inputColor}
            ref={refs.current[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;
