import {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Trending.scss';
import img from '../../assets/image/test.png';
import saveImg from '../../assets/image/save.png';
import savedImg from '../../assets/image/saved.png';

export default function Trending() {
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

    const movies = [
        { id: 1, name: 'Beyond Earth', year: '2019', type: "Movie", img: img, save: saveImg, saved: savedImg },
        { id: 2, name: 'Bottom Gear', year: '2021', type: "Movie", img: img, save: saveImg, saved: savedImg },
        { id: 3, name: 'Undiscovered Cities', year: '2019', type: "TV Series", img: img, save: saveImg, saved: savedImg },
        { id: 4, name: '1998', year: '2021', type: "movie", img: img, save: saveImg, saved: savedImg },
        { id: 5, name: 'Dark Side Of The Moon', year: '2018', type: "TV Series", img: img, save: saveImg, saved: savedImg },
    ];

    return (
        <div className="trending-main container">
            <Swiper
                spaceBetween={130}
                slidesPerView={3}
            >
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <div className="trending-card">
                            <img src={movie.img} alt={movie.name} />
                            {
                                activeSaves.includes(movie.id) ?
                                    <img className='save' src={movie.saved} alt="saved" onClick={() => toggleActiveSave(movie.id)} />
                                    :
                                    <img className='save' src={movie.save} alt="save" onClick={() => toggleActiveSave(movie.id)} />
                            }
                            <div className='trending-card-text'>
                                <p>{movie.year}</p>
                                <h3>{movie.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
