import { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import Sidebar from '../../components/Sidebar/Sidebar';
import Cardlist from '../../components/Cardlist/Cardlist';
import Trending from '../../components/Trending/Trending';

export default function Layout({ data, loading }) {
    const [value, setValue] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleInputChange = (e) => {
        let value = e.target.value;
        setValue(value);

        if (value === '') {
            setFilteredData(data);
        } else {
            const filter = data.filter((item) =>
                item.title.toLowerCase().startsWith(value.toLowerCase())
            );
            setFilteredData(filter);
        }
    };
    console.log(filteredData);
    return (
        <div className='layout'>
            <Sidebar />
            <div className="center_content container">
                <Search handleSearch={handleInputChange} value={value} />
                {loading ? <p className='loading'>Loading..</p> :
                    <>
                        <Trending data={data} />
                        <Cardlist data={filteredData} />
                    </>
                }
            </div>
        </div>
    );
}
