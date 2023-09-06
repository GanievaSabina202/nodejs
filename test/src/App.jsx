import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');


  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/task');
      setData(response.data.getData);
    } catch (error) {
      setError(error.response.data.msg);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data, 'Data');

  return (
    <>
      <div>
        {
          data.length > 0 ? data.map((item) => (
            <h1 key={item.id}>{item.name}</h1>
          )) :
            <p>{error}</p>
        }
      </div>
    </>
  )
}

export default App
