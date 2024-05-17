import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "./components/Login/Login";
import SignUp from './components/SignUp/SignUp'
import Layout from './Layout/Layout';
import Movie from './pages/movie/movies';
import TV from './pages/tv/tv';
import Liked from './pages/liked/liked';
import Home from './pages/home/home';
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
                    <Routes>
                        <Route path='/' element={<Layout data={data} />}>
                            <Route index element={<Navigate to="/home" replace={true} />} />
                            <Route path='/home' element={<Home data={data} />} />
                            <Route path='/movie' element={<Movie data={data} />} />
                            <Route path='/tv' element={<TV data={data} />} />
                            <Route path='/liked' element={<Liked data={data} />} />
                        </Route>
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                    </Routes>
                </Router>
            }
        </div>
    );
}
