import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initialState = {
  title: '',
  author: ''
}


const AddBook = () => {

  const [data, setData] = useState(initialState)

  const {title, author} = data

  const handleChange = e => {

  setData({...data, [e.target.id]: e.target.value})

}

const handleSubmit = e => {
  e.preventDefault()
  console.log(data)
}

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

              <li className='list-group-item list-group-item-light d-flex justify-content-between'>book recorded</li>

            </ul>
          </div>

          <div className="d-flex justify-content-center m-3">

              <Button variant="danger" type="submit">
                    Delete
              </Button>

          </div>
        </div>
      </div>
    </main>
  )
}

export default AddBook
