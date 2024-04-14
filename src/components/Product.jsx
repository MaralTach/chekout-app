
import {InputGroup,Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
// import ShowProductBar from './ShowProductBar';

function Product() {
  const [addTocard, setAddTocard] = useState(false);
 
  return (
    <Form className='container w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>
   
       <Form.Label htmlFor="basic-url">Product Image</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
  
      <Button variant="primary" type="submit" className='m-auto d-block'
      onClick={()=>setAddTocard(!addTocard)}>
        <TiShoppingCart />
       Add To Card
      </Button>
    </Form>
    
  );
}

export default Product;