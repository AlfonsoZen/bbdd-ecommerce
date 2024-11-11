import { useEffect, useRef, useState } from "react"

import Product from "../Product/Product.component"
import axiosInstance from '../../utils/queries'

import SearchIcon from "../../assets/search.svg"

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const selectedBrands = useRef([]);

    const [isEmpy, setIsEmpy] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('/products')
                setProducts(response.data)
                setFilteredProducts(response.data)
            } catch {
                console.error('Error fetching products:', error);
            } finally {
                setIsEmpy(false);
            }
        }
        const fetchBrands = async () => {
            try {
                const response = await axiosInstance.get('/brands')
                setBrands(response.data)
            } catch {
                console.error('Error fetching products:', error);
            } finally {
                setIsEmpy(false);
            }
        }

        fetchProducts();
        fetchBrands();
    }, [])

    const handleBrandChange = (event) => {
        const brandSelected = event.target.name;
        const brandStatus = event.target.checked;

        let leftProducts = [];
    
        if( brandStatus ) {
            console.log(selectedBrands.current);
            
            selectedBrands.current = selectedBrands.current.push(brandSelected)

            console.log(selectedBrands.current);
            
            
            
            // leftProducts = selectedBrands.map( brand => products.filter( product => product[2] == brand ))
            // console.log(leftBrands);
            
            // setFilteredProducts(leftBrands)
        } else{
            // brandsSelected = brandsSelected.filter( brandFilter => brandSelected != brandFilter)
        }

        console.log(leftProducts);
        
    }

    if (isEmpy) {
        return <div>ERROR 500</div>;
    }

    return (
        <div className="flex">
            <div className="basis-1/4">
                <h2>Filtros</h2>
                <div>
                    <p>Ordenar Por</p>
                    <input type="checkbox" /> Mas Nuevo
                    <input type="checkbox" /> Mas Viejo
                    <input type="checkbox" /> Mayor a menor Precio
                    <input type="checkbox" /> Menor a mayor Precio

                </div>
                <div>
                    <p>Marcas</p>
                    {
                        brands.map(brand => (
                            <div key={brand[0]} >
                                <input type="checkbox" onClick={handleBrandChange} name={brand[1]}/> {brand[1]}
                            </div>
                        ))
                    }
                </div>


            </div>


            <div className="basis-3/4 justify-center">
                <h2 className="md:text-4xl font-bold">Nuestros Productos</h2>

                <div className="flex">
                    <img src={SearchIcon} alt="Search Icon" className="h-5" />
                    <input type="text" className="border-solid" />
                </div>

                <div className="flex">
                    {
                        filteredProducts.map(product => (
                            <Product key={product[0]}
                                product={product}
                            />
                        ))
                    }
                </div>
            </div>
        </div>

    )



}

export default ProductsContainer