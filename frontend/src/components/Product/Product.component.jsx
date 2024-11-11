const Product = ({ product }) => {
    // console.log(product);
    
    return (
        <div className="border-2 rounded border-white m-5">
            <h3 className="text-lg">{product[1]}</h3>
            <img src="https://media.sonos.com/images/znqtjj88/production/6d1891b5f7a2236498c20a2fe895506dc0ba6ab9-2500x2500.png?w=3840&q=100&fit=clip&auto=format" alt="headphone" />
            <p>Made by <span>{product[2]}</span></p>
        </div>

        
    )
}

export default Product;