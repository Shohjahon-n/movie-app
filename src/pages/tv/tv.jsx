import { useState } from 'react';
import Search from '../../components/Search/Search';
import Cardlist from '../../components/Cardlist/Cardlist';

export default function Tv({ data, loading }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(data.filter(item => item.category === 'TV Series'));

    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setFilteredData(data.filter(item => item.type === 'tv'));
            setValue('');
        } else {
            setValue(e.target.value);
            const filter = data.filter((item) => item.type === 'tv' && item.title.toLowerCase().startsWith(e.target.value.toLowerCase()));
            setFilteredData(filter);
        }
    };

    return (
        <div className='layout'>
            <div className="center_content container">
                <Search handleSearch={handleSearch} value={value} />
                {loading ? <p className='loading'>Loading..</p> : <Cardlist data={filteredData} />}
            </div>
        </div>
    );
}
