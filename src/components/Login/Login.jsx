import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Login.scss'
import movieImg from '../../assets/image/Movie.svg'
export default function Login() {
    let [login , setLogin] = useState()
    let [password , setPassword] = useState()
    
    return (
        <div className='main-login'>
            <div className="login-img">
                <img src={movieImg} alt="" />
            </div>
            <div className="login-card">
                <h3>Login</h3>
                <div className="login-form">
                    <form action="">
                        <input type="text" placeholder='Username' onChange={(e) => setLogin(e.target.value)} />
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <button>Login to your account</button>
                    </form>
                </div>
                <div className="to-sign-up">
                    Don't have an account?
                    <span>
                        <Link to="/signup"> Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
