import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems); 
    const cartTotal = useSelector(selectCartTotal);
    const PayAuthReq = () => {
        fetch('https://localhost:4000/paymobauth',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api_key': process.env.PAYMOB_API_KEY
            }}
        )
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return(
        <div className='mt-5 text-center'>
            {cartItems.map((cartItem) =>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            <div className="fw-bold h4">Total: {cartTotal} LE</div>
            <div className="mx-auto">
                <Button type='submit' onClick={PayAuthReq}>Checkout</Button>
            </div>
        </div>
    )
}

export default Checkout;