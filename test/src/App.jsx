import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/task');
      setData(response.data.getData);
    } catch (error) {
      console.log(error);
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
          data.map((item) => (
            <h1 key={item.id}>{item.name}</h1>
          ))
        }
      </div>
    </>
  )
}

export default App
