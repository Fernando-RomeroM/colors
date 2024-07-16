import React from 'react';

const BoxColor = React.forwardRef(({ color, inputColor }, ref) => {
  const isMatch = color === inputColor;

  return (
    <div
      ref={ref}
      className={`box ${color}`}
      style={{ backgroundColor: isMatch ? color : 'transparent' }}
    >
      {isMatch ? `Soy el color ${color}` : `No soy el color ${inputColor}`}
    </div>
  );
});

export default BoxColor;
