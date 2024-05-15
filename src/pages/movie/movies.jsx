import { useState } from 'react';
import Search from '../../components/Search/Search';
import Sidebar from '../../components/Sidebar/Sidebar';
import Cardlist from '../../components/Cardlist/Cardlist';

export default function Movies({ data, loading }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(data.filter(item => item.category === 'Movie'));

    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setFilteredData(data.filter(item => item.type === 'movie'));
            setValue('');
        } else {
            setValue(e.target.value);
            const filter = data.filter((item) => item.type === 'movie' && item.title.toLowerCase().startsWith(e.target.value.toLowerCase()));
            setFilteredData(filter);
        }
    };
    console.log(filteredData);
    return (
        <div className='layout'>
            <Sidebar />
            <div className="center_content container">
                <Search handleSearch={handleSearch} value={value} />
                {loading ? <p className='loading'>Loading..</p> : <Cardlist data={filteredData} />}
            </div>
        </div>
    );
}
