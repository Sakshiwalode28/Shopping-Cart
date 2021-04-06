import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { random, commerce } from 'faker'
import { Container, Row, Col } from 'reactstrap'
import CardItem from './CardItem'


const apiKey = '563492ad6f917000010000016bb4405ff5bc4bc5a7e7a0ebcbdc36fe'

const url = 'https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1'


//IN CASE YOU DON'T HAVE KEY USE COMMENTED CODE
//const localUrl = 'https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json

const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([])

    const fetchProduct = async () => {
        const { data } = await Axios.get(url, {
            headers: {
                Authorization: apiKey
            }
        })

        const { photos } = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))

        setProduct(allProduct)
    };
    // const fetchProduct = async () => {
    //     const { data } = await Axios.get(localUrl);

    //     const { photos } = data;


    //     const Faker = require('Faker');

    //     const allProduct = photos.map(photo => ({
    //         smallImage: photo.src.medium,
    //         tinyImage: photo.src.tiny,
    //         productName: Faker.random.word(),
    //         productPrice: Faker.commerce.price(),
    //         id: Faker.random.uuid()
    //     }))

    //     setProduct(allProduct)

    // };
    useEffect(() => {
        fetchProduct()
    }, []);
    return (
        <Container fluid>
            <h1  color='primary' className='text-success text-center'>BUY PRODUCT</h1>

            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addInCart={addInCart} />
                    </Col>
                ))}

            </Row>
        </Container>
    )
}
export default BuyPage;