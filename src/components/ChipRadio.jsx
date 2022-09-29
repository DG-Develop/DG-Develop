import React from "react";

const ChipRadio = ({ Name, Id, Title, OnChange}) => {
  return (
    <>
      <input type="radio" name={Name} id={Id} onChange={OnChange}/>
      <label htmlFor={Id} className="chip">
        {Title}
      </label>
    </>
  );
};

export default ChipRadio;
