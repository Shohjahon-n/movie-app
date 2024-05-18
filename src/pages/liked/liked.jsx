import { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import Cardlist from '../../components/Cardlist/Cardlist';

export default function Liked({ data }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(data.filter(item => item.isBookmarked));
    const [movieData, setMovieData] = useState([]);
    const [tvData, setTvData] = useState([]);

    useEffect(() => {
        setMovieData(filteredData.filter(item => item.category === 'Movie'));
        setTvData(filteredData.filter(item => item.category === 'TV Series'));
    }, [filteredData]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchTerm = e.target.value.toLowerCase();
        setValue(searchTerm);
        if (searchTerm === '') {
            setFilteredData(data.filter(item => item.isBookmarked));
        } else {
            const filter = data.filter((item) => item.isBookmarked && item.title.toLowerCase().startsWith(searchTerm));
            setFilteredData(filter);
        }
    };

    return (
        <div className='layout'>
            <div className="center_content container">
                <Search handleSearch={handleSearch} value={value} />
                <Cardlist data={movieData} typeName={"Bookmarked Movies"} />
                <Cardlist data={tvData} typeName={"Bookmarked TV Series"} />
            </div>
        </div>
    );
}
