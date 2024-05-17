import movieImg from '../../assets/image/Movie.svg'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react';
export default function SignUp({ setForm }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [toLog, setToLog] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === rePassword) {
            setForm({ user, password });    
            setToLog(true);
        } else {
            setPassword('');
            setRePassword('');
            setToLog(false);
        }
    }

    return (
        <div className='main-login'>
            <div className="login-img">
                <img src={movieImg} alt="" />
            </div>
            <div className="login-card" style={{ height: '418px' }}>
                <h3>Sign Up</h3>
                <div className="login-form" style={{ height: '330px' }}>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder='Repeat Password' value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
                        <button>Create an account</button>
                        {toLog && <Navigate to="/login" />}
                    </form>
                </div>
                <div className="to-sign-up"> Already have an account?
                    <span>
                        <Link to="/login">  Login</Link>
                    </span>
                </div>
            </div>
        </div >
    )
}
