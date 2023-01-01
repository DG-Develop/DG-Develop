import React from "react";

const ChipRadio = ({ Name, Id, Title }) => {
  return (
    <>
      <input type="radio" name={Name} id={Id} value={Title} required />
      <label htmlFor={Id} className="chip">
        {Title}
      </label>
    </>
  );
};

export default ChipRadio;
