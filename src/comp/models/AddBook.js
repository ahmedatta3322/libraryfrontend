import React, { useState } from "react";
import { Modal, Button, FormControl, InputGroup , Form } from "react-bootstrap";
import AddBookCom from "../api/AddBookCom";
//Request model and form 
export default function AddBook(props) {
  const [show, setShow] = useState(props.show(true, "setShow"));
  const [data, setData] = useState({});
  const handleClose = () => setShow(props.show(false, "handleClose"));
  const handleChangeData = (target) => {
    setData({...data,[target.target["name"]]:target.target["value"]})
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e)=>{
            e.preventDefault()
            let response = AddBookCom(data)
            response.then(e => {
              if(e.status === 200){
                handleClose()
            }})
          }}>
          <InputGroup className="mb-3">
            <FormControl required placeholder="Book Title" name="title" onChange={handleChangeData}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl required placeholder="Author" name="authors" onChange={handleChangeData}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl required placeholder="ISBN" name="isbn" onChange={handleChangeData}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl required placeholder="Stock" name="stock" type="number" onChange={handleChangeData}/>
          </InputGroup>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {" "}
          <Button type="submit" variant="primary" >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
