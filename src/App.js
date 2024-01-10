import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PrivateRoute from "./Components/Loayout/PrivateRoute";
import Register from "./Pages/Register";
import PNLAnalysis from "./Pages/PNLAnalysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/pnl-analysis"
          element={
            <PrivateRoute>
              <PNLAnalysis />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
