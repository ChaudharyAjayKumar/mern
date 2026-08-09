import { useState } from "react";

const Array_us = () => {
  let [person, SetPerson] = useState([{ name: "", age: 0 }]);
  let [name, SetName] = useState("");
  let [age, setAge] = useState(0);

  const addPerson = () => {
    SetPerson([...person, { id: person.length + 1, name: name, age: age }]);
  };

  return (
    <div>
      <h2>UseState Array</h2>
      Name:
      <input type="text" onChange={(e) => SetName(e.target.value)} /> <br />
      Age:
      <input type="number" onChange={(e) => setAge(e.target.value)} /> <br />
      <button onClick={addPerson}>add</button>
      <br />
      <ul>
        {person.map((p) => {
          return (
            <li key={p.id}>
              {" "}
              name:{p.name} - age:{p.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Array_us;
