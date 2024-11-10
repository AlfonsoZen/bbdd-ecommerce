import Product from "../Product/Product.component"

import SearchIcon from "../../assets/search.svg"

const ProductsContainer = () => {
    const products = [
        {
            "id": 1,
            "name": "BassMaster Pro",
            "brand": "AudioWave",
            "type": "Over-Ear",
            "price": 149.99,
            "color": "Black",
            "description": "High-quality over-ear headphones with enhanced bass and noise cancellation.",
            "features": ["Bluetooth 5.0", "20-hour battery life", "Noise Cancellation"],
            "imageUrl": "/assets/headphones/bassmaster_pro.png",
            "rating": 4.5,
            "inStock": true
        },
        {
            "id": 2,
            "name": "TuneLuxe 500",
            "brand": "SoundMates",
            "type": "In-Ear",
            "price": 79.99,
            "color": "White",
            "description": "Compact in-ear headphones with deep bass and a comfortable fit.",
            "features": ["Sweat-resistant", "15-hour battery with case", "Touch Controls"],
            "imageUrl": "/assets/headphones/tuneluxe_500.png",
            "rating": 4.2,
            "inStock": true
        },
        {
            "id": 3,
            "name": "StudioX ANC",
            "brand": "ClearSound",
            "type": "Over-Ear",
            "price": 199.99,
            "color": "Gray",
            "description": "Over-ear headphones with Active Noise Cancellation and studio-quality sound.",
            "features": ["ANC", "25-hour battery life", "Wireless and Wired"],
            "imageUrl": "/assets/headphones/studiox_anc.png",
            "rating": 4.8,
            "inStock": false
        },
        {
            "id": 4,
            "name": "FlexiPods",
            "brand": "WavePods",
            "type": "True Wireless",
            "price": 119.99,
            "color": "Blue",
            "description": "True wireless earbuds with adaptive sound control and water resistance.",
            "features": ["Bluetooth 5.2", "Water Resistant (IPX4)", "Quick Charging"],
            "imageUrl": "/assets/headphones/flexipods.png",
            "rating": 4.0,
            "inStock": true
        },
        {
            "id": 5,
            "name": "PureBass Ultra",
            "brand": "DeepTone",
            "type": "On-Ear",
            "price": 89.99,
            "color": "Red",
            "description": "On-ear headphones delivering powerful bass and clear sound.",
            "features": ["Foldable Design", "12-hour battery life", "Comfort Cushion"],
            "imageUrl": "/assets/headphones/purebass_ultra.png",
            "rating": 3.9,
            "inStock": true
        },
        {
            "id": 6,
            "name": "EliteMax Wireless",
            "brand": "SonicGear",
            "type": "Over-Ear",
            "price": 249.99,
            "color": "Silver",
            "description": "Premium wireless headphones with dynamic sound and superior comfort.",
            "features": ["30-hour battery life", "Wireless Charging", "Multi-Device Pairing"],
            "imageUrl": "/assets/headphones/elitemax_wireless.png",
            "rating": 4.7,
            "inStock": false
        },
        {
            "id": 7,
            "name": "AirBass Lite",
            "brand": "FreeBeats",
            "type": "In-Ear",
            "price": 59.99,
            "color": "Green",
            "description": "Lightweight in-ear headphones with balanced sound for daily use.",
            "features": ["Bluetooth 5.0", "10-hour battery life", "Magnetic Earbuds"],
            "imageUrl": "/assets/headphones/airbass_lite.png",
            "rating": 4.1,
            "inStock": true
        }
    ]
    
    return (
        <>
        <div className="text-[#272932] text-center p-5">
            <h2 className="text-4xl font-bold">Nuestros Productos</h2>


            <div className="flex justify-items">
                <img src={SearchIcon} alt="Search Icon" className="h-5"/>
                <input type="text" className="border-solid"/>
            </div>
            <div className="flex">
            {products.map( product => (
                <Product key={product.id} product={product}/>
            ))}
            </div>
        </div>
        </>
    )

}

export default ProductsContainer