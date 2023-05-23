import Show from './Show'

function ShowsList ({ showData })  {


  return (
    <div className='shows-container'>
      
      {
      showData.map(singleShowData => {
      if(singleShowData.imdb_id) {
        return <Show key = { singleShowData.imdb_id } show = {singleShowData.imdb_id} />
      }
    })}
      
      
    </div>
    )
}

export default ShowsList