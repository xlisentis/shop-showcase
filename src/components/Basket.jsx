import { ShopContext } from '../context/context';
import { useContext } from 'react';

function Basket() {
    const { orders, handleBasketShow } = useContext(ShopContext);

    const quantity = orders.length;

    return (
        <div
            className='basket cyan darken-4 white-text'
            onClick={handleBasketShow}
        >
            <i className='material-icons'>shopping_basket</i>
            {quantity ? (
                <span className='basket-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
}

export { Basket };
