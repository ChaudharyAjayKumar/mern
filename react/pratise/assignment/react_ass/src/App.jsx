import Five from "./component/Five";
import Seven from "./component/Seven";
import Six from "./component/Six";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    // <>
    //   <One />
    //   <Two name={"ajay"} email={"ajay@gmail.com"} />
    //   <Three LoginStatus={true} />
    //   <BrowserRouter>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Register />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
    <>
      <Five />
      <Six />
      <Seven/>
    </>
  );
};

export default App;
