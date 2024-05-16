// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import './Trending.scss';
// import movieImg from '../../assets/movie-ct.png';
// import tvImg from '../../assets/category-tv.png';
// import saveImg from '../../assets/image/save.png';
// import savedImg from '../../assets/image/saved.png';

// export default function Trending({ data }) {
//     const [bookmarked, setBookmarked] = useState({});

//     const toggleBookmark = (movieId) => {
//         setBookmarked(prev => ({
//             ...prev,
//             [movieId]: !prev[movieId]
//         }));
//     };

//     const trending = data.filter(item => item.isTrending);

//     return (
//         <div className="trending-main">
//             <h2>Trending</h2>
//             <Swiper
//                 spaceBetween={130}
//                 slidesPerView={3}
//             >
//                 {trending.map((movie) => (
//                     <SwiperSlide key={movie.id}>
//                         <div className="trending-card">
//                             <img className='main-img'
//                                 src={movie.thumbnail.trending ? movie.thumbnail.trending.small : movie.thumbnail.regular.medium}
//                                 alt={movie.title} />
//                             {bookmarked[movie.id] ?
//                                 <img className='save' onClick={() => toggleBookmark(movie.id)} src={savedImg} alt="Unsave" />
//                                 :
//                                 <img className='save' onClick={() => toggleBookmark(movie.id)} src={saveImg} alt="Save" />
//                             }
//                             <div className='trending-card-text'>
//                                 <div className="trending-about">
//                                     <p>{movie.year}</p>
//                                     <p className='oval'></p>
//                                     <div className="category">
//                                         {movie.category === 'Movie' ?
//                                             <img src={movieImg} alt={movie.category} /> :
//                                             <img src={tvImg} alt={movie.category} />
//                                         }
//                                         <p>{movie.category}</p>
//                                     </div>
//                                     <p className='oval'></p>
//                                     <p>{movie.rating}</p>
//                                 </div>
//                                 <h3>{movie.title}</h3>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Trending.scss';
import movieImg from '../../assets/movie-ct.png';
import tvImg from '../../assets/category-tv.png';
import saveImg from '../../assets/image/save.png';
import savedImg from '../../assets/image/saved.png';

export default function Trending({ data }) {
    const [bookmarked, setBookmarked] = useState({});

    const toggleBookmark = (movieId) => {
        setBookmarked(prev => ({
            ...prev,
            [movieId]: !prev[movieId]
        }));
    };

    const trending = data.filter(item => item.isTrending);

    return (
        <div className="trending-main ">
            <h2>Trending</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                centeredSlides={false}
                freeMode={true}
            >
                {trending.map((movie) => (
                    <SwiperSlide key={movie.id} style={{ width: 'auto' }}>
                        <div className="trending-card">
                            <img className='main-img'
                                src={movie.thumbnail.trending ? movie.thumbnail.trending.small : movie.thumbnail.regular.medium}
                                alt={movie.title} />
                            {bookmarked[movie.id] ?
                                <img className='save' onClick={() => toggleBookmark(movie.id)} src={savedImg} alt="Unsave" />
                                :
                                <img className='save' onClick={() => toggleBookmark(movie.id)} src={saveImg} alt="Save" />
                            }
                            <div className='trending-card-text'>
                                <div className="trending-about">
                                    <p>{movie.year}</p>
                                    <p className='oval'></p>
                                    <div className="category">
                                        {movie.category === 'Movie' ?
                                            <img src={movieImg} alt={movie.category} /> :
                                            <img src={tvImg} alt={movie.category} />
                                        }
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
