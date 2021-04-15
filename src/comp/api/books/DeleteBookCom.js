import axios from 'axios'
//Delete book request
export default function DeleteBookCom(params) {
  const deleterequest = axios.delete(`http://127.0.0.1:5000/deletebook/${params}`).then(
    e => {return e}
  ).catch(
    error => {return error}
  )
  return deleterequest
}
