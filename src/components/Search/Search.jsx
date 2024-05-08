import search from '../../assets/image/search.png'
import Trending from '../Trending/Trending';
import './Search.scss'
export default function Search() {
    return (
        <>
            <div className='search_content'>
                <img src={search} alt="search" />
                <input type="text" placeholder='Search for movies or TV series' />
                <Trending />
            </div>
        </>
    )
}
