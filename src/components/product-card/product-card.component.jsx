
import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    return(
    <div className='col-lg-3 col-md-4 col-sm-6 col-12 mt-4 product-card-container'>
            <img alt={name} src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add To Card</Button>
        </div>
    )
}

export default ProductCard;