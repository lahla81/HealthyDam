import { Fragment, useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return(
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => (
                    <Fragment>
                        <h3>{title}</h3>
                        <div className="container">
                            <div className="row">
                                {categoriesMap[title].map((product) => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product}
                                    />
                                ))}
                                
                            </div>
                        </div>
                    </Fragment>
                ))
            }
        </Fragment>
    )
}

export default Shop;