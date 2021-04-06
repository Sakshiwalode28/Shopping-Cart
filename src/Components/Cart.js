import React from 'react'
import {
    ListGroup,
    ListGroupItem,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col,
    Container
}
    from 'reactstrap'

const Cart = ({ cartItem , buyNow, removeItem }) => {

    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    });

    return (
        <Container fluid>
            <h1 className="text-success">YOUR CART</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                    height='80'
                                    src={item.tinyImage}
                                />
                            </Col>
                            <Col className='text-center'>
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>Price: {item.productPrice}</span>
                                <Button color='warning' onClick={() => removeItem(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {cartItem.length >= 1 ? (
                <Card className='text-center mt-2'>
                    <CardHeader>
                        <div>Grans Total</div>
                    </CardHeader>
                    <CardBody>
                        Your amount for {cartItem.length} product is {amount}$
                    </CardBody>
                    <CardFooter>
                        <Button color='success' onClick={buyNow}>PAYMENT</Button>
                    </CardFooter>


                </Card>
            ) : (
                <h1 className='text-danger'> Your cart is empty</h1>
            )}
        </Container>
    )
}
export default Cart;