import search from '../../assets/image/search.png';
import './Search.scss';

export default function Search({ value, handleSearch }) {
    return (
        <div className='search_content container'>
            <div className='input_content'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <img src={search} alt="search" />
                    <input
                        value={value}
                        onChange={handleSearch}
                        type="text"
                        placeholder='Search for movies or TV series'
                    />
                </form>
            </div>
        </div>
    );
}