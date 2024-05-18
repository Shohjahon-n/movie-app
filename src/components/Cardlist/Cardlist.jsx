import CardListItem from '../CardListItem/CardListItem';
import './Cardlist.scss';
import { useState, useEffect } from 'react';

export default function Cardlist({ data }) {
    const [type, setType] = useState('');
    const [showDefaultMessage, setShowDefaultMessage] = useState(false);

    useEffect(() => {
        let hasMovie = false;
        let hasTVSeries = false;
        let allBookmarked = true;

        if (data.length === 0) {
            setShowDefaultMessage(true);
        } else {
            setShowDefaultMessage(false);
            data.forEach(item => {
                if (!item.isBookmarked) {
                    allBookmarked = false;
                }
                if (item.category === 'Movie') {
                    hasMovie = true;
                } else if (item.category === 'TV Series') {
                    hasTVSeries = true;
                }
            });

            if (allBookmarked) {
                setType('Bookmarks');
            } else if (hasMovie && hasTVSeries) {
                setType('Recommended for you');
            } else if (hasMovie) {
                setType('Movies');
            } else if (hasTVSeries) {
                setType('TV Series');
            }
        }
    }, [data]);

    return (
        <>
            <h4>{type}</h4>
            <div className='cardlist'>
                {
                    showDefaultMessage ? (
                        <p className='movie-not-found'>This movie is not found</p>
                    ) : (
                        data.map((item, idx) => {
                            let { title, rating, year, category, thumbnail, id, isBookmarked } = item;
                            return (
                                <CardListItem
                                    key={idx}
                                    isBookmarked={isBookmarked}
                                    movieId={id}
                                    movieimg={thumbnail}
                                    movieName={title}
                                    movieDate={year}
                                    movieType={category}
                                    movieRating={rating}
                                />
                            );
                        })
                    )
                }
            </div>
        </>
    );
}
