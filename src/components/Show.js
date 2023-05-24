import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {Card,ListGroup} from 'react-bootstrap';

 const Show=  ({show})=>{
  const [showData, setShowData] = useState([]);

    useEffect(()=>{
      const options={
        url:`https://www.omdbapi.com/?i=${show}&apikey=863e0dfb`
      }
      async function just(){
        const response = await axios.request(options);
        console.log(response.data);
        setShowData(response.data);
      }
      just()
    },[])
    
    

  return (
    <div className='show-card' style={{display:showData.Poster==="N/A"?'none':'block'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={showData.Poster} />
      <Card.Body>
        <Card.Title>{showData.Title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Language: {showData.Language}</ListGroup.Item>
        <ListGroup.Item>Rating: {showData.imdbRating}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default Show



