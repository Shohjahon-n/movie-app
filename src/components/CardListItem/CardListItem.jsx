import { useState } from 'react'
import './CardListItem.scss'
import movieImg from '../../assets/movie-ct.png';
import tvImg from '../../assets/category-tv.png'
import saveImg from '../../assets/image/save.png';
import savedImg from '../../assets/image/saved.png';
export default function CardListItem({ movieimg, movieName, movieDate, movieType, movieRating, movieId, isBookmarked }) {
    const [bookmarked, setBookmarked] = useState({});

    const toggleBookmark = (movieId) => {
        setBookmarked(prev => ({
            ...prev,
            [movieId]: !prev[movieId]
        }));
    };
    console.log(isBookmarked);
    return (
        <div className='card_item'>
            <div className="movie_img">
                {isBookmarked ?
                    <img className='save' onClick={() => toggleBookmark(movieId)} src={savedImg} alt="Unsave" />
                    :
                    bookmarked[movieId] ?
                        <img className='save' onClick={() => toggleBookmark(movieId)} src={savedImg} alt="Unsave" />
                        :
                        <img className='save' onClick={() => toggleBookmark(movieId)} src={saveImg} alt="Save" />
                }

                <img src={movieimg.regular.large} alt={movieName} />
            </div>
            <div className='movie_info'>
                <div className="movie_about">
                    <p className="date">{movieDate}</p>
                    <span className="oval"></span>
                    <div className="category_movie">
                        {movieType === 'Movie' ? <img src={movieImg} alt={movieType} /> : <img src={tvImg} alt={movieType} />}
                        <p className="type">{movieType}</p>
                    </div>
                    <span className="oval"></span>
                    <p className="rating">{movieRating}</p>
                </div>
                <div className="movie_name">
                    <h3>{movieName}</h3>
                </div>
            </div>
        </div>
    )
}
