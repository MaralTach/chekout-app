import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "../helper/data.js";
import { useState } from "react";
import axios from "axios";
console.log(data);

function ProductDetails() {
  const [count, setCount] = useState(1);

  const increment = (e) => {
   setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
     
      setCount(count - 1);
      
    }
  };

  return (
    <Card className="container w-50">
      {data.map((item) => (
        <div className="card m-3 text-center pt-2">
          <Card.Title>{item.name}</Card.Title>
          <Card.Img variant="top" src={item.image} />

          <div className="price-container d-flex justify-content-center flex-column">
            <p>
              Price: <span className="price"></span>
              {item.price} $
           
              </p>

            <p className="d-flex gap-2 justify-content-center">
             
              <button className="btn btn-primary" onClick={increment}>+</button>
              <h3>{count}</h3>
              <button className="btn btn-primary" onClick={decrement}>-</button>
            </p>
          </div>

          <Button variant="primary">Remove</Button>
          <p className="text-center">Total: {count * item.price}$</p>
        </div>
      ))}
      <Card.Body>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductDetails;
