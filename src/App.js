import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Chats from "./components/Chats";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </Router>
  );
};

export default App;
