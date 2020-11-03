import React ,{useState,useEffect} from "react";
import  Axios from "axios";
import CartItem from "./cartitem";
 
import {random,commerce} from "faker";
import {Container,Col,Row} from "reactstrap"

const apiKey="Insert your key here"
const url="https//api.pixels.com/v1/search?query=laptop&per_page=6&page=1"


const Buypage= ({addInCart}) =>{
    const [product,setProduct]=useState([]);

    // const fetchPhotos=async ()=>{
    //     const response=await Axios.get(url,{
    //         header:{
    //             Authorization:apiKey
    //         }
    //     }); 
    const fetchPhotos=async ()=>{
        const {data}=await Axios.get('https://api.jsonbin.io/b/5f8521cf65b18913fc5e6b39');
   

    const{photos}=data;

    const allProduct=photos.map(photo=>({
        smallImage:photo.src.medium,
        tinyImage:photo.src.tiny,
        productName:random.word(),  
        productPrice:commerce.price(),
        id:random.uuid()

    }))
    setProduct(allProduct);


};

    useEffect(()=>{
        fetchPhotos()
    },[]);

    return(
        <Container fluid>
            <h1 className="text-success text-center">SHOPPING CART</h1>
            <Row>
    {product.map(product=>(
        <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart}/>
        </Col>
    ))}
            </Row>

        </Container>
    );
    


};

export default Buypage;