import { Item } from './Item';
import { ShopContext } from '../context/context';
import { useContext } from 'react';

function ItemsList() {
    const { items = [] } = useContext(ShopContext);

    if (!items.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='items'>
            {items.map((item) => (
                <Item key={item.mainId} {...item} />
            ))}
        </div>
    );
}

export { ItemsList };
