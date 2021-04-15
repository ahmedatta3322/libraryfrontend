import React from 'react'
import { Table ,Button} from 'react-bootstrap';
import {Get } from 'react-axios'
import DeleteBookCom from './DeleteBookCom';
const handleDelete = (id) => {
  DeleteBookCom(id)
  window.location.reload()
} 
export default function GetBooksCom() {
  return <Get url="http://127.0.0.1:5000/getbooks">
  {(error, response, isLoading, makeRequest, axios) => {
    if(error) {
      return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
    }
    else if(isLoading) {
      return (<div>Loading...</div>)
    }
    else if(response !== null) {
      return (<div>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Stock</th>
            <th>Isbn</th>
            <th>Actions</th>
            </tr>
          </thead>
          {
            //Table rendering 
            response.data.thelist.map(e => {
              return <tr>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.authors}</td>
              <td>{e.stock}</td>
              <td>{e.isbn}</td>
              <td>
                <Button onClick={() => handleDelete(e.id)}>Delete</Button>
                {" "}
                <Button>Edit</Button>
              </td>
            </tr>
            })
          }
        </Table>
         <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
    }
    return (<div>Default message before request is made.</div>)
  }}
  </Get>
}
