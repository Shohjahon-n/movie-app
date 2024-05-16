import { useState } from 'react';
import Search from '../../components/Search/Search';
import Cardlist from '../../components/Cardlist/Cardlist';

export default function Liked({ data }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(data.filter(item => item.isBookmarked));

    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setFilteredData(data.filter(item => item.isBookmarked));
            setValue('');
        } else {
            setValue(e.target.value);
            const filter = data.filter((item) => item.isBookmarked && item.title.toLowerCase().startsWith(e.target.value.toLowerCase()));
            setFilteredData(filter);
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
