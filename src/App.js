import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Component/MyNav'
import books from './data/books/fantasy.json'
import MyFooter from './Component/Myfooter'
import {Container, Row, Col, Card,Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header>
        <MyNav/>
      </header>
      <main>
        <Container>
          <Row className="justify-content-center">
            {books.slice().map((book) => {
              return (
                <Col className='mt-2' xs={12} md={6} lg={3} key={book.asin}>
                  <Card className="h-100 w-100 mt-3 ">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body className='d-flex flex-column justify-content-between' >
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>Prezzo:{book.price}$ <strong>{book.category}</strong></Card.Text>
                      
                    </Card.Body>
                    <Button variant="success">Descrizione</Button>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </main>
    <footer>
      <MyFooter/>
    </footer>
    </div>
  )
}

export default App
