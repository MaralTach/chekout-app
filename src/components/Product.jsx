import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import ShowProductBar from './ShowProductBar';

function Product() {
  const [addTocard, setAddTocard] = useState(false);
 
  return (
    <Form className='container w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" placeholder="Password" />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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
       Add To Card
      </Button>
    </Form>
    
  );
}

export default Product;