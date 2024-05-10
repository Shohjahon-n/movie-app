import React from 'react'
import './CardListItem.scss'
import movieImg from '../../assets/image/movies-icon.svg';
import tvImg from '../../assets/image/tv.svg'
export default function CardListItem({ movieimg, movieName, movieDate, movieType, movieRating }) {
    return (
        <div className='card_item'>
            <div className="movie_img">
                <img src={movieimg.regular.large} alt={movieName} />
            </div>
            <div className='movie_info'>
                <div className="movie_about">
                    <p className="date">{movieDate}</p>
                    {movieType === 'Movie' ? <img src={movieImg} alt={movieType} /> : <img src={tvImg} alt={movieType} />}
                    <p className="type">{movieType}</p>
                    <p className="rating">{movieRating}</p>
                </div>
                <div className="movie_name">
                    <h3>{movieName}</h3>
                </div>
            </div>
        </div>
    )
}
