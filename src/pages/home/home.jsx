import Search from '../../components/Search/Search';
import Cardlist from '../../components/Cardlist/Cardlist';
import Trending from '../../components/Trending/Trending';
import { useState } from 'react';
export default function Home({ data }) {
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(data.filter(item => !item.isTrending));
    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setFilteredData(data);
            setValue('');
        } else {
            setValue(e.target.value);
            const filter = data.filter((item) => item.title.toLowerCase().startsWith(e.target.value.toLowerCase()));
            setFilteredData(filter);
        }
    };

    return (
        <div className='layout'>
            <div className="center_content container">
                <Search handleSearch={handleSearch} value={value} />
                <Trending data={data} />
                <Cardlist data={filteredData} />
            </div>
        </div>
    )
}
