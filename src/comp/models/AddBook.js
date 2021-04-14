import React,{useState } from 'react'
import { Modal ,Button,FormControl,InputGroup} from 'react-bootstrap';
import AddBookCom from '../api/AddBookCom';
export default function AddBook(props) {
  const [show, setShow] = useState(props.show(true,"setShow"));
  const handleClose = () => setShow(props.show(false, "handleClose"));
  const [data,setData] = useState([])
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
    
    <FormControl
      placeholder="Book Title"
      title="title"
    />
    </InputGroup>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Author"
      name="author"
    />
    </InputGroup>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="ISBN"
      name="isbn"
    
    />
    </InputGroup>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Stock"
      name="stock"
      type="number"
    />
    </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddBookCom}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
