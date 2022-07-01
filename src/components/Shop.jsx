import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';
import { Basket } from './Basket';
import { OrderList } from './OrderList';
import { ShopContext } from '../context/context';

function Shop() {
    const { loading, isBasketShow, setItems } = useContext(ShopContext);

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setItems(data.shop);
            });
        //eslint-disable-next-line
    }, []);

    return (
        <main className='container content'>
            <Basket />
            {loading ? <Preloader /> : <ItemsList />}
            {isBasketShow && <OrderList />}
        </main>
    );
}

export { Shop };
