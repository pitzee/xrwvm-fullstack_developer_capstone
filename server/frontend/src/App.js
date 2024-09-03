import LoginPanel from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import RegisterPanel from './components/Register/Register';
import LogoutPanel from './components/Logout/Logout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/logout" element={<LogoutPanel />} />
    </Routes>
  );
}
export default App;
