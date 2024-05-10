import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Trending.scss';
import movieImg from '../../assets/movie-ct.png';
import tvImg from '../../assets/category-tv.png'
import saveImg from '../../assets/image/save.png';
import savedImg from '../../assets/image/saved.png';
import ovalImg from '../../assets/oval.png'

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
                                <div className="trending-about">
                                    <p>{movie.year}</p>
                                    <p className='oval'></p>
                                    <div className="category">
                                        {movie.category === 'Movie' ? <img src={movieImg} alt={movie.category} /> : <img src={tvImg} alt={movie.category} />}
                                        <p>{movie.category}</p>
                                    </div>
                                    <p className='oval'></p>
                                    <p>{movie.rating}</p>
                                </div>
                                <h3>{movie.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
