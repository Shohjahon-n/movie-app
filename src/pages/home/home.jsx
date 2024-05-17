import Search from '../../components/Search/Search';
import Cardlist from '../../components/Cardlist/Cardlist';
export default function Home({ data }) {

    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setFilteredData(data.filter(item => item.type === 'movie'));
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
                <Search handleSearch={handleSearch} />
                <Cardlist data={data} />
            </div>
        </div>
    )
}
