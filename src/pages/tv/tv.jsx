import { useState } from 'react';
import Search from '../../components/Search/Search';
import Cardlist from '../../components/Cardlist/Cardlist';

export default function Tv({ data }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(data.filter(item => item.category === 'TV Series'));

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setValue(searchValue);
        if (searchValue === '') {
            setFilteredData(data.filter(item => item.category === "TV Series"));
        } else {
            const filtered = data.filter(item =>
                item.category === "TV Series" && item.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    return (
        <div className='layout'>
            <div className="center_content container">
                <Search handleSearch={handleSearch} value={value} />
                <Cardlist data={filteredData} />
            </div>
        </div>
    );
}
