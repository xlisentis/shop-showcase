function Order(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeOrder = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
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
