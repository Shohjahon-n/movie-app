import { Link } from 'react-router-dom'
import './Login.scss'
import movieImg from '../../assets/image/Movie.svg'
export default function Login() {
    return (
        <div className='main-login'>
            <div className="login-img">
                <img src={movieImg} alt="" />
            </div>
            <div className="login-card">
                <h3>Login</h3>
                <div className="login-form">
                    <form action="">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
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
