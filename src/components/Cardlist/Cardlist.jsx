import CardListItem from '../CardListItem/CardListItem'
import './Cardlist.scss'
import { useState, useEffect } from 'react'
export default function Cardlist({ data }) {
    let [type, setType] = useState('')
    useEffect(() => {
        console.log("Data prop:", data);

        let hasMovie = false;
        let hasTVSeries = false;
        let hasBookmarks = false;

        data.forEach(item => {
            if (item.category === 'Movie') {
                hasMovie = true;
            } else if (item.category === 'TV Series') {
                hasTVSeries = true;
            } else if (item.category === 'bookmarks') {
                hasBookmarks = true;
            }
        });

        if (hasMovie && hasTVSeries) {
            setType('Recommended for you');
        } else if (hasMovie) {
            setType('Movies');
        } else if (hasTVSeries) {
            setType('TV Series');
        } else {
            setType('Bookmarks');
        }
    }, [data]);

    return (
        <>
            <h4>{type}</h4>
            <div className='cardlist'>
                {
                    data.map((item, idx) => {
                        let { title, rating, year, category, thumbnail, id } = item
                        return (
                            <CardListItem key={idx} movieId={id} movieimg={thumbnail} movieName={title} movieDate={year} movieType={category} movieRating={rating} />
                        )
                    })
                }
            </div>

        </>
    )
}
