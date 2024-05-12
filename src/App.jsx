import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Layout from './components/Layout/Layout';
function App() {
    
    return (
        <Router>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    </Route>
                </Routes>
        </Router>
    );
}

export default App;
