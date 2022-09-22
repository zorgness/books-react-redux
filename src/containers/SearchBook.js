import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ApiCall, addBook } from '../redux/actions/actionBooks'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const SearchBook = ({apiData, apiBook, addBook}) => {

const initialStateSearch = {
  subject: ''

}

const notify = book => toast.success(`${book} is added to your list`, {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });

const [search, setSearch] = useState(initialStateSearch)

const { subject } = search

const handleChange = e => {

setSearch({...search, [e.target.id]: e.target.value})

}

const handleSubmit = e => {
  e.preventDefault()
  apiBook(subject)
}

const handleSave = (title, author) => {

  const bookToSave = { title, author: author[0]}

  addBook(bookToSave)
  notify(title)

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

          <Accordion defaultActiveKey="0" key={id} className="m-2" style={{minWidth: '375px'}} >
          <Accordion.Item eventKey="0">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>

              <Card style={{minWidth: '375px', height: '400px' }} className="m-2" key={id}>

                {
                    image !== '' && <Card.Img className="card-img-top m-2" variant="top" src={image} style={{ width: '75px', height: '135px' }}/>
                }

                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{authors}</Card.Text>

                    <Card.Body>{truncateString(description, 160)}</Card.Body>

                  <Card.Link className='btn btn-primary mx-3' href={previewLink}>More info</Card.Link>
                  <Button variant="success" type="submit" onClick={() => handleSave(title, authors)}>Save</Button>

                </Card.Body>
              </Card>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        )
  })


  return (
    <main role="main">
      <div className="jumbotron container-fluid ">
        <div className="container text-center">
          <h1 className='display-4'>Search</h1>
          <p>Find books by subject on Google API</p>

          <ToastContainer />

          <Form onSubmit={handleSubmit}>

            <Form.Group className='mb-3 ' >
              <Form.Control type="text" onChange={handleChange} id="subject" value={subject} placeholder="Which subject are you looking for ?" required />
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
    addBook: param => dispatch(addBook(param)),
    apiBook: subject => dispatch(ApiCall(subject))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBook)
