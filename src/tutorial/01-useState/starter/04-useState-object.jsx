import { useState } from "react";

const UseStateObject = () => {
  const [personName, setPersonName] = useState("oliver");
  const [personAge, setPersonAge] = useState(25);
  const [personHobbie, setPersonHobbie] = useState("Playing Video Games!");

  const changeHero = () => {
    setPersonName("John Cena");
    setPersonAge(46);
    setPersonHobbie("Trash talking on TV");
  };

  return (
    <>
      <div>
        <h3>{personName}</h3>
        <h2>{personAge}</h2>
        <h4>Enjoys to : {personHobbie}</h4>
      </div>
      <button
        onClick={changeHero}
        className="btn"
        style={{ marginBottom: "2rem" }}
      >
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
