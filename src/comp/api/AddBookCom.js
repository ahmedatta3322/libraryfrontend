import axios from 'axios'
//Add book request
export default function AddBookCom(params) {
  const addrequest = axios.post('http://127.0.0.1:5000/addbook', params).then(
    e => {return e}
  ).catch(
    error => {return error}
  )
  return addrequest
}
