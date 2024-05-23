import { useState, useEffect } from 'react';
import './CardListItem.scss';
import movieImg from '../../assets/movie-ct.png';
import tvImg from '../../assets/category-tv.png';
import saveImg from '../../assets/image/save.png';
import savedImg from '../../assets/image/saved.png';

export default function CardListItem({ movieimg, movieName, movieDate, movieType, movieRating, movieId, isBookmarked }) {
    const [bookmarked, setBookmarked] = useState(isBookmarked);

    useEffect(() => {
        setBookmarked(isBookmarked);
    }, [isBookmarked]);

    const toggleBookmark = (movieId) => {
        fetch(`https://server2425.onrender.com/data/${movieId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isBookmarked: !bookmarked })
        }).then((data) => {
            setBookmarked(!bookmarked);
            window.location.reload();
        }).catch(error => {
            console.error('Error updating bookmark:', error);
        });
    };

    return (
        <div className='card_item'>
            <div className="movie_img">
                <img
                    className='save'
                    src={bookmarked ? savedImg : saveImg}
                    alt={bookmarked ? "Unsave" : "Save"}
                    onClick={() => toggleBookmark(movieId)}
                />
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
    );
}
