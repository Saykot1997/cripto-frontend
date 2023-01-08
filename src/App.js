
// import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Laout from "./Components/Loayout/Loayout";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <Laout>
        <Home />
      </Laout>
    </>
  );
}

export default App;
