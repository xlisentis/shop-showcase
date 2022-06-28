import { Item } from './Item';

function ItemsList(props) {
    const { items = [] } = props;

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
