import C1 from "./component/C1";
import C2 from "./component/C2";
import C3 from "./component/C3";
import ListRendering from "./component/ListRendering";
import Props from "./component/Props";
import UseState from "./component/UseState";

function App() {
  return (
    <>
      <UseState />
      <Props name={"ajay"} age={20} />
      <ListRendering />
      <C1 isLogged={true} />
      <C2 isLogged={false} />
      <C3 isLogged={false} />
    </>
  );
}

export default App;
