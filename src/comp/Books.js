
import React from 'react'
import {Get} from 'react-axios'
import { Table ,Button} from 'react-bootstrap';
export default function Books() {


    return (
      <div>
      <h1>Books</h1>
      <Button className={"addbookbtn"}>Add book</Button>
      {
      //Get component request
      
}
        <Get url="http://127.0.0.1:5000/getbooks">
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            console.log(response.data.thelist)
            return (<div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Authors</th>
                  <th>Stock</th>
                  <th>Isbn</th>
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
                      <Button>Delete</Button>
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
      </div>
    )
}
