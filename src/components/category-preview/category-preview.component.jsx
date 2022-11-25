import ProductCard from "../product-card/product-card.component";


const CategoryPreview = ({title, products}) => {
    return(
        <div>
            <h4 className="text-center"><span className="cursor-pointer text-bold mb-1">{title.toUpperCase()}</span></h4>
            <div className="container">
                <div className="row mb-3">
                    {
                        products
                            .filter((_, idx) => idx < 4 )
                            .map((product) => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product}
                                />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryPreview;