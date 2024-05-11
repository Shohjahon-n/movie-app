import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/Search/Search'
import { useState, useEffect } from 'react';
function App() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [lodading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('https://server2425.onrender.com/data')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
                setLoading(false);
            }).catch(err => console.log(err))
    }, []);

    const handleSearch = (e) => {
        if (e.target.value === '') {
            setFilteredData(data);
            setValue('');
        } else {
            setValue(e.target.value);
            const filter = data.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setFilteredData(filter);
        }
    }

    return (
        <Router>
            <div className="login">
                <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '30px' }}>
                    <Sidebar />
                    <Search loading={lodading} value={value} handleSearch={handleSearch}
                        filteredData={filteredData} data={data} />
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
