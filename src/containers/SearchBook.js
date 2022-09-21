import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const SearchBook = () => {

const initialStateSearch = {
  subject: ''

}

const [search, setSearch] = useState(initialStateSearch)

const { subject } = search

const handleChange = e => {

setSearch({...search, [e.target.id]: e.target.value})

}

const handleSubmit = e => {
  e.preventDefault()
  console.log(subject)
}


  return (
    <main role="main">
      <div className="jumbotron container-fluid ">
        <div className="container text-center">
          <h1 className='display-4'>Search</h1>
          <p>Find books by subject</p>

          <Form onSubmit={handleSubmit}>


            <Form.Group className='mb-3 ' >
              <Form.Control type="text" onChange={handleChange} id="subject" value={subject} placeholder="Which subjet are you looking for ?" required />
            </Form.Group>


            <Form.Group className="" >
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form.Group>

          </Form>
        </div>
      </div>


      <div className="container">
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Results of your research</Accordion.Header>
        <Accordion.Body>


        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>title</Card.Title>
              <Card.Text>author</Card.Text>
              <Card.Body>description</Card.Body>
              <Button variant="primary">More info</Button>
            </Card.Body>
        </Card>

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>



      </div>


      </main>
  )
}

export default SearchBook
