import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Trending.scss';
import img from '../../assets/image/test.png';

export default function Trending() {
    const movies = [
        { id: 1, name: 'Beyond Earth', year: '2019', type: "Movie", img: img },
        { id: 2, name: 'Bottom Gear', year: '2021', type: "Movie", img: img },
        { id: 3, name: 'Undiscovered Cities', year: '2019', type: "TV Series", img: img },
        { id: 4, name: '1998', year: '2021', type: "movie", img: img },
        { id: 5, name: 'Dark Side Of The Moon', year: '2018', type: "TV Series", img: img },
    ];

    return (
        <div className="trending-main container">
            <Swiper
                spaceBetween={150}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <div className="trending-card">
                            <img src={movie.img} alt={movie.name} />
                            <div>
                                <h3>{movie.name}</h3>
                                <p>{movie.year}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
