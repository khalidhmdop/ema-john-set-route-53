import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem'

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = key => {
        console.log(key);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}

                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default OrderReview;