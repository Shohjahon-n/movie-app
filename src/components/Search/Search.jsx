import search from '../../assets/image/search.png'
import './Search.scss'
export default function Search({ data, value, handleSearch }) {
    return (
        <div className='search_content container'>
            <div className='input_content'>
                <form onSubmit={handleSearch} >
                    <img src={search} alt="search" />
                    <input value={value} onChange={handleSearch} type="text" placeholder='Search for movies or TV series' />
                </form>
            </div>
        </div>
    )
}
