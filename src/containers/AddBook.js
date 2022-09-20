import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux'
import { addBook } from '../redux/actions/actionAddBook';


const AddBook = ({libraryData, addBook}) => {

  console.log(libraryData)

  const initialState = {
    title: '',
    author: ''
  }

  const [newData, setNewData] = useState(initialState)

  const {title, author} = newData

  const handleChange = e => {

  setNewData({...newData, [e.target.id]: e.target.value})

}

const handleSubmit = e => {
  e.preventDefault()
  addBook(newData)
  setNewData(initialState)
}


const displayData = libraryData.length > 0 ?
  libraryData.map(({id, title, author}) => {
    return (
      <li className='list-group-item list-group-item-light d-flex justify-content-between' key={id}>
        <span><strong>Title: {title}</strong></span>
        <span><strong>Author: {author}</strong></span>
        <span> <Button variant="danger" type="submit">X</Button></span>
      </li>
    )
  }) : <p className='text-center'>Nothing for the moment</p>


  return (
    <main role="main">
      <div className="jumbotron container-fluid ">
        <div className="container text-center">
          <h1 className='display-4'>BOOKS</h1>
          <p>Add book to your list</p>

          <Form  className="row form-inline justify-content-center" onSubmit={handleSubmit}>


            <Form.Group className="ml-3 col" >
              <Form.Control type="text" onChange={handleChange} id="title" value={title} placeholder="Title" required />
            </Form.Group>

            <Form.Group className="ml-3 col" >

              <Form.Control type="text" onChange={handleChange} id="author" value={author} placeholder="Author" required/>
            </Form.Group>

            <Form.Group className="col-2" >
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>

          </Form>
        </div>
      </div>

      <div className="container" style={{minHeight: '200px'}}>
        <div className="row">
          <div className="col-md-12">
            <ul className='list-group'>

              {
                displayData
              }

            </ul>
          </div>

          <div className="d-flex justify-content-center m-3">

              <Button variant="danger" type="submit">
                    Delete all
              </Button>

          </div>
        </div>
      </div>
    </main>
  )
}

const mapStateToProps = (state) => {

  return {
    libraryData:  state.library
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: param => dispatch(addBook(param))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook)
