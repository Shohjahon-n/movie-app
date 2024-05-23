import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "./components/Login/Login";
import SignUp from './components/SignUp/SignUp';
import Layout from './Layout/Layout';
import Movie from './pages/movie/movies';
import TV from './pages/tv/tv';
import Liked from './pages/liked/liked';
import Home from './pages/home/home';
import PrivateRoute from './router/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';
export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://server2425.onrender.com/data');
                const result = await res.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.log("Error fetching data: ", err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="main-center">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/" element={<Layout loading={loading} />}>
                        <Route path="/home" element={<PrivateRoute />}>
                            <Route index element={<Home data={data} />} />
                        </Route>
                        <Route path="/movie" element={<Movie data={data} />} />
                        <Route path="/tv" element={<TV data={data} />} />
                        <Route path="/liked" element={<Liked data={data} />} />
                    </Route>
                    <Route path="/login" element={<Login form={form} />} />
                    <Route path="/signup" element={<SignUp setForm={setForm} />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    );
}
