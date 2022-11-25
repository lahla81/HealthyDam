import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

const CategoryPage = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);
    
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return(
        <div>
            <h4 className="text-center text-bold">{category.toUpperCase()}</h4>
            <div className="container">
                <div className="row">
                    {products &&
                        products.map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;