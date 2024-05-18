import CardListItem from '../CardListItem/CardListItem'
import './Cardlist.scss'
import { useState, useEffect } from 'react'

export default function Cardlist({ data }) {
    let [type, setType] = useState('')

    useEffect(() => {
        let hasMovie = false;
        let hasTVSeries = false;
        let allBookmarked = true;

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
    }, [data]);

    return (
        <>
            <h4>{type}</h4>
            <div className='cardlist'>
                {
                    data.map((item, idx) => {
                        let { title, rating, year, category, thumbnail, id, isBookmarked } = item
                        return (
                            <CardListItem key={idx} isBookmarked={isBookmarked} movieId={id} movieimg={thumbnail} movieName={title} movieDate={year} movieType={category} movieRating={rating} />
                        )
                    })
                }
            </div>
        </>
    )
}
