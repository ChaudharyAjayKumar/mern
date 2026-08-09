import { useEffect, useState } from "react";

const UseEffect1 = () => {
  let [count, SetCount] = useState(0);

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => SetCount(count + 1)}>count {count}</button>
    </div>
  );
};

export default UseEffect1;
