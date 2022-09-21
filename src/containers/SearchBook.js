import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ApiCall } from '../redux/actions/actionBooks'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const SearchBook = ({apiData, apiBook}) => {

  console.log(apiData)

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
  apiBook(subject)
}

const displayApiData = apiData.isLoading ? (

  <div>Loading...</div>
)
: apiData.error ? (

  <p>{apiData.error}</p>
)
:
    apiData.books.items !== undefined && apiData.books.items.map(() => {
        return (

        <Card style={{ width: '18rem' }} className="m-2">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>author</Card.Text>
            <Card.Body>description</Card.Body>
            <Button variant="primary">More info</Button>
          </Card.Body>
        </Card>

        )
  })


  return (
    <main role="main">
      <div className="jumbotron container-fluid ">
        <div className="container text-center">
          <h1 className='display-4'>Search</h1>
          <p>Find books by subject on Google API</p>

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


      <Container style={{minHeight:'80vh'}}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Results of your research</Accordion.Header>
              <Accordion.Body>
                <Container className='d-flex flex-wrap m-3'>
                  {
                    displayApiData
                  }
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </ Container>


      </main>
  )
}

const mapStateToProps = state => {
  return {
    apiData: state.apiBook
  }
}

const mapDispatchToProps = dispatch => {
  return {
    apiBook: subject => dispatch(ApiCall(subject))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBook)
