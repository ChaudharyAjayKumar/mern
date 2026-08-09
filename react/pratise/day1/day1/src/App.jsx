import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/home";

// function App() {

//   return (
//     <>
//     <ClassComp/>
//     <FunctionComp/>
//     </>

//   )
// }

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
