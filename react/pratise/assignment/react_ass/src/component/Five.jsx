import { useState } from "react";

const Five = () => {
  let [list, setList] = useState([{ item: "" }]);
  let [item, setItem] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setItem(e.target.value)} /> <br />
      <button onClick={() => setList([...list, { item: item }])}>add</button>
      <br />
      <ul>
        {list.map((l, index) => (
          <li key={index}>{l.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Five;
