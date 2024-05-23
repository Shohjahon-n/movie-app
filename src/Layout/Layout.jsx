import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import loadingImg from '../assets/loadingImg.svg'
export default function Layout({ loading }) {
    return (
        <div className="layout">
            <Sidebar />
            <div className="content">
                {loading ?
                    <div className="loading-content">
                        <img className='loading' src={loadingImg} alt="Loading..." />
                    </div> :
                    <Outlet />
                }
            </div>
        </div>
    );
}
