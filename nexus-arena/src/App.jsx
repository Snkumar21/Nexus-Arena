import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;