
import React , {useState}from 'react'
import {Button} from 'react-bootstrap';
import GetBooksCom from './api/GetBooksCom';
import AddBook from './models/AddBook';


export default function Books() {
  //Get all books
  const GetBooksApi = GetBooksCom
  //Setting the default component 
  const [comp, setComp] = useState(GetBooksApi); 
  //Handling the model showing and closing
  const handleAddCallback = (e,y) => {
   if (y === "handleClose"){
      e = false
      setComp(GetBooksApi)
    }
    return e
  }
    return (
      <div>
      <h1>Books</h1>
      <Button className={"addbookbtn"} onClick={e => {
        setComp(<AddBook show={handleAddCallback}></AddBook>)
      }}>Add book</Button>
      {comp}
      </div>
    )
}
