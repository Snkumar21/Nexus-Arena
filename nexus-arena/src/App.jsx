import './App.css'
import Dashboard from "./component/dashboard.jsx";

function App() {
  return (
    <>
      <Route path="/dashboard" element={<Dashboard />} />
    </>
  )
}

export default App