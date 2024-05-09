import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/Search/Search'
import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <div className="login">
                <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '30px' }}>
                    <Sidebar />
                    <Search />
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
