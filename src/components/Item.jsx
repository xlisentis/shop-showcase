function Item(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        addOrder = Function.prototype,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={displayAssets[0].background} alt={displayName} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addOrder({
                            mainId,
                            displayName,
                            price,
                        })
                    }
                >
                    Buy
                </button>
                <span className='right'>{price.finalPrice} $</span>
            </div>
        </div>
    );
}

export { Item };
