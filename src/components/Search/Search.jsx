import search from '../../assets/image/search.png'
import './Search.scss'
import Trending from '../Trending/Trending'
import Cardlist from '../Cardlist/Cardlist'
export default function Search({ data }) {
    return (
        <div className='search_content container'>
            <div className='input_content'>
                <img src={search} alt="search" />
                <input type="text" placeholder='Search for movies or TV series' />
            </div>
            <Trending data={data} />
            <Cardlist data={data}/>
        </div>
    )
}
