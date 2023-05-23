import {Container,Navbar} from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (
    <div className='footer'>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          &copy; Magesh 2023
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer