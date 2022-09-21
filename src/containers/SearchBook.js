import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ApiCall } from '../redux/actions/actionBooks'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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

const truncateString = (str, num) => {

  if(str !== undefined) {

   return str.length <= num ? str : str.slice(0, num) + '...'

  } else {
    return 'No description available'
  }

}

const displayApiData = apiData.isLoading ? (

  <div>Loading...</div>
)
: apiData.error ? (

  <p>{apiData.error}</p>
)
:
    apiData.books.items !== undefined &&
    apiData.books.items.map(({id, volumeInfo }) => {

        const { title, authors, description, previewLink } = volumeInfo

        const image = volumeInfo.hasOwnProperty('imageLinks') ?  volumeInfo.imageLinks.thumbnail : ''

        return (

        <Card style={{ width: '18rem', height: '377.59px' }} className="m-2" key={id} >

          {
              <Card.Img className="card-img-top" variant="top" src={image} style={{ width: '50px', height: '90px' }}/>
          }

          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{authors}</Card.Text>

              <Card.Body>{truncateString(description, 160)}</Card.Body>

            <Card.Link className='btn btn-primary' href={previewLink}>More info</Card.Link>
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



      <Container className='d-flex flex-wrap justify-content-center align-items-center' style={{minHeight:'80vh'}}>
        {
          displayApiData
        }
      </Container>



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
