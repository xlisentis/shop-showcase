import { Order } from './Order';

function OrderList(props) {
    const {
        orders,
        handleBasketShow = Function.prototype,
        removeOrder = Function.prototype,
    } = props;

    const totalPrice = orders.reduce(
        (acc, el) => acc + el.quantity * el.price.finalPrice,
        0
    );

    return (
        <ul className='collection orders'>
            <li className='collection-item active'>Basket</li>
            {orders.length ? (
                orders.map((el) => (
                    <Order key={el.mainId} {...el} removeOrder={removeOrder} />
                ))
            ) : (
                <li className='collection-item'>Basket is empty</li>
            )}
            <li className='collection-item active'>
                Total price: {totalPrice} $
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
