import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../context/product.context";

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return(
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default Shop;