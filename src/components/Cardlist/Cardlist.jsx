import CardListItem from '../CardListItem/CardListItem'
import './Cardlist.scss'
export default function Cardlist({data}) {
  return (
    <>
    <h4>Recommended for you</h4>
    <div className='cardlist'>
      {
      data.map((item, idx) => {
        let {title, rating, year, category, thumbnail} = item
        return (
            <CardListItem key={idx} movieimg={thumbnail} movieName={title} movieDate={year} movieType={category} movieRating={rating}/>
        )
      })
      }
    </div>
    
    </>
  )
}
