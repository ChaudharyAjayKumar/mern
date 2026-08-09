import { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);
  let [click, SetClick] = useState("Click");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <button onClick={() => SetClick("clicked")}>{click}</button>
    </div>
  );
};

export default UseState;
