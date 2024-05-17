import { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import Cardlist from '../../components/Cardlist/Cardlist';

export default function Movies({ data }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(data.filter(item => item.category === 'Movie'));
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setValue(searchValue);
        if (searchValue === '') {
            setFilteredData(data.filter(item => item.category === "Movie"));
        } else {
            const filtered = data.filter(item =>
                item.category === "Movie" && item.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };
    return (
        <div className='layout'>
            <div className="center_content container">
                <Search value={value} handleSearch={handleSearch} />
                <Cardlist data={filteredData} />
            </div>
        </div>
    );
}
