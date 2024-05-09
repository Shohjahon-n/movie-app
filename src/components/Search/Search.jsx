import search from '../../assets/image/search.png'
import './Search.scss'
import Trending from '../Trending/Trending'
export default function Search() {
    return (
        <div className='search_content'>
            <div className='input_content'>
                <img src={search} alt="search" />
                <input type="text" placeholder='Search for movies or TV series' />
            </div>
            <Trending />

        </div>
    )
}
