import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Card from "./pages/Card/Card.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
