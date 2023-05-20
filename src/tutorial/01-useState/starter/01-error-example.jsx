import React, { useState } from "react";
import { data } from "../../../data";
const ErrorExample = () => {
  const [people, setPeople] = useState(data);

  const singleRemove = (id) => {
    const upDatedPeople = people.filter((person) => person.id !== id);
    setPeople(upDatedPeople);
  };

  const removeAll = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => singleRemove(person.id)}>Remove</button>
          </div>
        );
      })}

      <button className="btn" onClick={removeAll} style={{ marginTop: "2rem" }}>
        Clear All
      </button>
    </>
  );
};

export default ErrorExample;
