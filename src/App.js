import { useState, useEffect } from "react";
import Form from "./Form";
import Lists from "./Lists";
import Table from "./Table";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err.stack);
      } finally {

      }
    }
    fetchItems();
  }, [reqType])

  return (
    <div className="App">
     <Form reqType={reqType} setReqType={setReqType} />
     {/* <Lists items={items} /> */}
     <Table items={items} />
    </div>
  );
}

export default App;
