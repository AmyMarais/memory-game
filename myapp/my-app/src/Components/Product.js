import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
function Products(props) {
    const listProducts = props.products.map((products) =>
    	<Col>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{products.product_name}</Card.Title>
    <Card.Text>
      {products.price}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    );
    return (
<Container>
  <Row>
   {listProducts}
  </Row>
</Container>
);
}

export default Products;