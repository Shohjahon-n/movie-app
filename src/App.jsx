import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Layout from './components/Layout/Layout';
import Movie from './pages/movie/movies';
import TV from './pages/tv/tv';
import Liked from './pages/liked/liked';
import Sidebar from './components/Sidebar/Sidebar';
import loadingImg from './assets/loadingImg.svg';

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
            {loading ? <img className='loading' src={loadingImg} alt="" /> :
                <Router>
                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<Layout data={data} />} />
                        <Route path='/movie' element={<Movie data={data} />} />
                        <Route path='/tv' element={<TV data={data} />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/liked' element={<Liked data={data} />} />
                    </Routes>
                </Router>
            }
        </div>
    );
}
