const sampleCart = [
    {
    product:{
        productID:"sample-product-1",
        name:"Sample Product 1",
        images:"https://via.placeholder.com/150",
        price:100,
        labeledPrice:150,
    },
    qty:1
},{
    product:{
        productID:"sample-product-2",
        name:"Sample Product 2",
        images:"https://via.placeholder.com/150",
        price:200,
        labeledPrice:250,

    },
    qty:2
}
]


export function getCart(){

    const cartInString = localStorage.getItem("cart");

    if(cartInString===null){
        localStorage.setItem("cart" , "[]")

        return [];
    }else{
        const cart = JSON.parse(cartInString);
        return cart;
    }
}


export function addToCart(product , qty){

    const cart = getCart()


    //check if product already exists in the cart
    
    const productIndex = cart.findIndex(
        (item)=>{

            return item.product.productID == product.productID;

        }
    )

    if(productIndex == -1){

        if(qty<1){
            return
        }
        
        cart.push({
            product:{
                productID:product.productID,
                name:product.name,
                images:product.images[0],
                price:product.price,
                labeledPrice:product.labeledPrice,
            },
            qty:qty
        }
    )

    

    }else{

        cart[productIndex].qty += qty

        if(cart[productIndex].qty<1){

            cart.splice(productIndex, 1)
        }

    }

    const cartInString = JSON.stringify(cart)

    localStorage.setItem("cart" , cartInString)
}
