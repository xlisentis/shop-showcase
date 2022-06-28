import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                data.shop && setItems(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            {loading ? <Preloader /> : <ItemsList items={items} />}
        </main>
    );
}

export { Shop };
