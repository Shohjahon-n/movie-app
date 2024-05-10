import React from 'react'
import './CardListItem.scss'
export default function CardListItem({movieimg, movieName, movieDate, movieType, movieRating}) {
  return (
    <div className='card_item'>
        <div className="movie_img">
                <img src={movieimg.regular.large} alt={movieName} />
        </div>
        <div className='movie_info'>
            <div className="movie_about">
                <p className="date">{movieDate}</p>
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
