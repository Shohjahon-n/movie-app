import search from '../../assets/image/search.png'
import './Search.scss'
import Trending from '../Trending/Trending'
import Cardlist from '../Cardlist/Cardlist'
export default function Search({ data, value, handleSearch, loading, filteredData }) {
    return (
        <div className='search_content container'>
            <div className='input_content'>
                <form >
                    <img src={search} alt="search" />
                    <input value={value} onChange={handleSearch} type="text" placeholder='Search for movies or TV series' />
                </form>
            </div>
            <Trending data={data} />
            {loading ? <h1>Loading...</h1> : null}
            <Cardlist data={filteredData} />
        </div>
    )
}
