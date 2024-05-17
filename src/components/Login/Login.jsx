import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';
import movieImg from '../../assets/image/Movie.svg';

export default function Login({ form }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(login === '' || password === ''){
            setLoginError('Please enter username');
            setPasswordError('Please enter password');
            if (login === form.user && password === form.password) {
                localStorage.setItem('auth', 'true');
                navigate('/home');
            }else{
                setLoginError('Username or password is incorrect');
            }   
        }else{
            setLoginError('');
            setPasswordError('');
        }
    }

    return (
        <div className='main-login'>
            <div className="login-img">
                <img src={movieImg} alt="Movie" />
            </div>
            <div className="login-card">
                <h3>Login</h3>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Username'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <span>{loginError}</span>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className='pass'>{passwordError}</span>
                        <button type="submit">Login to your account</button>
                    </form>
                </div>
                <div className="to-sign-up">
                    Already have an account?
                    <span>
                        <Link to="/signup"> Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
