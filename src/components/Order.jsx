import { ShopContext } from '../context/context';
import { useContext } from 'react';

function Order(props) {
    const { mainId, displayName, price, quantity } = props;

    const { removeOrder, incQuantity, decQuantity } = useContext(ShopContext);

    return (
        <li className='collection-item'>
            {displayName}{' '}
            <i
                class='material-icons order-quantity'
                onClick={() => decQuantity(mainId)}
            >
                remove
            </i>
            x{quantity}{' '}
            <i
                className='material-icons order-quantity'
                onClick={() => incQuantity(mainId)}
            >
                add
            </i>{' '}
            = {price.finalPrice * quantity} $
            <span className='secondary-content'>
                <i
                    className='material-icons delete-order'
                    onClick={() => removeOrder(mainId)}
                >
                    clear
                </i>
            </span>
        </li>
    );
}

export { Order };
