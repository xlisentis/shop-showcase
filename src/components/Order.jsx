function Order(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeOrder = Function.prototype,
    } = props;
    return (
        <li className='collection-item'>
            {displayName} x{quantity} = {price.finalPrice * quantity} $
            <span class='secondary-content'>
                <i
                    class='material-icons delete-order'
                    onClick={() => removeOrder(mainId)}
                >
                    clear
                </i>
            </span>
        </li>
    );
}

export { Order };
