
import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    return(
    <div className='col-lg-3 col-md-4 col-sm-6 col-6 mt-4 product-card-container'>
            <img alt={name} src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType='inverted'>Add To Card</Button>
        </div>
    )
}

export default ProductCard;