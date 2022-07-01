import { Order } from './Order';
import { ShopContext } from '../context/context';
import { useContext } from 'react';

function OrderList() {
    const { handleBasketShow, orders = [] } = useContext(ShopContext);

    const totalPrice = orders.reduce(
        (acc, el) => acc + el.quantity * el.price.finalPrice,
        0
    );

    return (
        <ul className='collection orders'>
            <li className='collection-item active'>Basket</li>
            {orders.length ? (
                orders.map((el) => <Order key={el.mainId} {...el} />)
            ) : (
                <li className='collection-item'>Basket is empty</li>
            )}
            <li className='collection-item active'>
                Total price: {totalPrice} $
            </li>
            <li className='collection-item'>
                <button className='btn btn-small'>Order</button>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { OrderList };
