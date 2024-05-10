import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Trending.scss';
import img from '../../assets/image/test.png';
import saveImg from '../../assets/image/save.png';
import savedImg from '../../assets/image/saved.png';
export default function Trending({ data }) {
    const [activeSaves, setActiveSaves] = useState([]);

    const toggleActiveSave = (linkId) => {
        setActiveSaves(prev => {
            if (prev.includes(linkId)) {
                return prev.filter(id => id !== linkId);
            } else {
                return [...prev, linkId];
            }
        });
    };
    const trending = data.filter(item => item.isTrending)
    return (
        <div className="trending-main">
            <h2>Trending</h2>
            <Swiper
                spaceBetween={130}
                slidesPerView={3}
            >
                {trending.map((movie, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="trending-card">
                            <img
                                src={movie.isTrending ? movie.thumbnail.trending.small : movie.thumbnail.regular.medium}
                                alt={movie.title}
                            />
                            {/* {
                                activeSaves.includes(movie.id) ?
                                    <img className='save' src={savedImg} alt="saved" onClick={() => toggleActiveSave(movie.id)} />
                                    :
                                    <img className='save' src={saveImg} alt="save" onClick={() => toggleActiveSave(movie.id)} />
                            } */}
                            <div className='trending-card-text'>
                                <p>{movie.year}</p>
                                <h3>{movie.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
