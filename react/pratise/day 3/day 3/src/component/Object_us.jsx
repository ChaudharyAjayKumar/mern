import { useState } from "react";

const Object_us = () => {
  let [emps, setEmps] = useState({ name: "", age: 0 });

  return (
    <div>
      <h1>UseState Object</h1>
      Name:
      <input type="text" onChange={(e) => setEmps({ ...emps,name: e.target.value })} /> <br />
      Age:
      <input type="number" onChange={(e) => setEmps({ ...emps,age: e.target.value })} />
      <h2>
        name: {emps.name}/ age: {emps.age}
      </h2>
    </div>
  );
};

export default Object_us;
