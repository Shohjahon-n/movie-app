import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Sidebar from './components/Sidebar/Sidebar';
function App() {
    return (
        <Router>
            <div className="login">
                <Routes>
                    <Route path='/' element={<Sidebar />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
