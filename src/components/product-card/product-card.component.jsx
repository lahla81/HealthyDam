import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';

import './product-card.styles.scss';
import Button from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return(
        <div className='col-md-3 col-sm-6 col-6 mt-1 mb-3 product-card-container'>
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