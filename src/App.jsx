import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/Search/Search'
import Trending from './components/Trending/Trending'
function App() {
    return (
        <Router>
            <div className="login">
                <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '30px' }}>
                    <Sidebar />
                    <Search />
                    <Trending />
                </div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
