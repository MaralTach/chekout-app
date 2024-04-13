import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
  <h1 className='text-center'>Checkout Page</h1>
 


 <button className='btn btn-danger m-auto d-block' 
 onClick={()=>setVisible(!visible)}>{visible? "Hide Product": "Show Product"}
 </button>
{visible && <Product/>}
    </div>
  );
}

export default App;
