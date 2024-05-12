import { useState, useEffect } from 'react'
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import Trending from '../Trending/Trending';
import Cardlist from '../Cardlist/Cardlist';

export default function Layout() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('https://server2425.onrender.com/data')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
                setLoading(false);
            }).catch(err => console.log(err))
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setFilteredData(data);
            setValue('');
        } else {
            setValue(e.target.value);
            const filter = data.filter((item) => item.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setFilteredData(filter);
        }
    }

    return (
        <div className='layout'>
            <Sidebar />
            <div className="center_content container">
                <Search handleSearch={handleSearch} value={value} />
                {loading ? <p className='loading'>Loading..</p> :
                    <>
                        <Trending data={data} />
                        <Cardlist data={filteredData} />
                    </>
                }
            </div>
        </div>
    )
}
