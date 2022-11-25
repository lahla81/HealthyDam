import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
    const {
        cartItems, 
        addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart,
        cartTotal
    } = useContext(CartContext); 
    return(
        <div className='mt-5'>
            <div className=''>
                {cartItems.map((item) =>{
                    const {name, imageUrl, price, quantity, id} = item;
                    return(
                        <div className="container text-center" key={id}>
                            <div className="" >
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-4">
                                            <img src={imageUrl} className="img-fluid w-100 rounded-start" style={{height:180}} alt={`${name}`}/>
                                        </div>
                                        <div className="col-7">
                                            <div className="card-body">
                                                <h6 className="card-title h2">{name}</h6>
                                                <p className="card-text h3">
                                                <span className="cursor-pointer px-2" onClick={() => removeItemFromCart(item)}>
                                                    &#10094;
                                                </span>
                                                {quantity}
                                                <span className="cursor-pointer px-2" onClick={() => addItemToCart(item)}>
                                                    &#10095;
                                                </span>
                                                x {price}LE = {price*quantity}LE</p>
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <h4 
                                                className="pr-4 text-red fw-bold mt-4 text-danger cursor-pointer"
                                                onClick={() => clearItemFromCart(item)}
                                            >&#10005;</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } )}
                <div className="fw-bold h4 text-center">Total: {cartTotal} LE</div>
            </div>
        </div>
    )
}

export default Checkout;