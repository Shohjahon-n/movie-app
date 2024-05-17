import movieImg from '../../assets/image/Movie.svg'
import { Link } from 'react-router-dom'
export default function SignUp() {
    return (
        <div className='main-login'>
            <div className="login-img">
                <img src={movieImg} alt="" />
            </div>
            <div className="login-card" style={{ height: '418px' }}>
                <h3>Sign Up</h3>
                <div className="login-form" style={{ height: '330px' }}>
                    <form action="">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Repeat Password' />
                        <button>Create an account</button>
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
