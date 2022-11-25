import { Route, Routes } from "react-router-dom";
import CategoreisPreview from "../categories_preview/categories_preview.component";
import CategoryPage from "../category-page/category-page.component";

const Shop = () => {
    
    return(
        <Routes>
            <Route index element={<CategoreisPreview />} />
            <Route path=":category" element={<CategoryPage />} />
        </Routes>
    )
}

export default Shop;