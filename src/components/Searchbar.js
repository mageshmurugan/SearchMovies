import React,{useState} from 'react'
import ShowsList from './ShowsList'
import axios from 'axios';
import {Button,Container,Form,Navbar} from 'react-bootstrap';

import logo from '../resource/ivshowicon.png'

function Searchbar() {
  const [searchText, setSearchText] = useState('harry');
  const [showData, setShowData] = useState([]);

  async function handleSearch() {



const options = {
  method: 'GET',
  url: 'https://movies-tv-shows-database.p.rapidapi.com/',
  params: {
    title:`${searchText}`
  },
  headers: {
    Type: 'get-movies-by-title',
    'X-RapidAPI-Key': '001ef94159mshe80e2d68a3e78ffp1f19b4jsn767c34da497b',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
  }
};


	const respons = await axios.request(options);
	// console.log(respons.data.movie_results);

    setSearchText('harry')
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    // setShowData(response.data);
    setShowData(respons.data.movie_results);
    
  }
  

  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Tv Show App
      </Navbar.Brand>
        <Navbar>
          
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="primary"  onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar>
      </Container>
    </Navbar>
    
      <ShowsList showData={showData} />
    </div>
  )
}

export default Searchbar