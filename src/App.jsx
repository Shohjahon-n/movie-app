import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Layout from './components/Layout/Layout';
import MovieLayout from './pages/movie/movies';
import TVLayout from './pages/tv/tv';
import LikedLayout from './pages/liked/liked';

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
        <Router>
            <Routes>
                <Route path='/' element={<Layout data={data} loading={loading} />} />
                <Route path='/movie' element={<MovieLayout data={data} loading={loading} />} />
                <Route path='/tv' element={<TVLayout data={data} loading={loading} />} />
                <Route path='/liked' element={<LikedLayout data={data} loading={loading} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </Router>
    );
}
