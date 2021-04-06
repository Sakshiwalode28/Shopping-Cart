import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';
import '../App.css'


const CardItem = ({ addInCart, product }) => {
    return (
        <Card className='mt-2 mb-2'>

            <CardImg
                top
                height='250'
                width='100'
                src={product.smallImage} />
            <CardBody>
                <CardTitle>
                    <h1>{product.productName}</h1>
                </CardTitle>
                <CardText className='text-primary'>
                    <p>PRICE : {product.productPrice}$</p>
                </CardText>
                    <Button className='btn' onClick={() => {addInCart(product)}} >ADD TO CART</Button>

            </CardBody>

        </Card>
    )

}
export default CardItem;