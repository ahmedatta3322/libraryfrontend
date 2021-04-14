import axios from 'axios'
export default function AddBookCom() {
    return(axios.post('http://127.0.0.1:5000/addbook', {
        title: 'Fred',
        authors: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    )  
}
