import React from "react"

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button

}from "reactstrap"

const CartItem =({product,addInCart})=>{
    return(
        <Card className="mt-4 mb-1">
            <CardImg top height="150" width="100%" src={product.smallImage}/>
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">price:Rs{product.productPrice}</CardText>
                <Button color="success" onClick={()=>addInCart(product)}>Buy Now</Button>

            </CardBody>

        </Card>
    );
};

export default CartItem;
