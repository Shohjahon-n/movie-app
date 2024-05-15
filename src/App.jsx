import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Layout from './components/Layout/Layout';
import Movie from './pages/movie/movies';
import TV from './pages/tv/tv';
import Liked from './pages/liked/liked';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://server2425.onrender.com/data')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);
    console.log(data);
    return (
        <div className="main-center">
            <Router>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Layout data={data} loading={loading} />} />
                    <Route path='/movie' element={<Movie data={data} loading={loading} />} />
                    <Route path='/tv' element={<TV data={data} loading={loading} />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/liked' element={<Liked data={data} loading={loading} />} />
                </Routes>
            </Router>
        </div>
    );
}
