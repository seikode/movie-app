import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./routes/Home"

function App() {
  return <Router>
  <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/hello" element={<h1> Hello </h1>} />
  </Routes>
</Router>;
}

export default App;
