import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;