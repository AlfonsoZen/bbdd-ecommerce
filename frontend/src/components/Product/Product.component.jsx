const Product = ({ product }) => {
    return (
        <div className="">
            <h3 className="text-lg MD">{product.name}</h3>
            <p>{product.description}</p>
        </div>

        
    )
}

export default Product;