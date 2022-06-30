import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { ItemsList } from './ItemsList';
import { Basket } from './Basket';
import { OrderList } from './OrderList';

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const addOrder = (order) => {
        const orderIndex = orders.findIndex((el) => el.mainId === order.mainId);

        if (orderIndex < 0) {
            const newOrder = {
                ...order,
                quantity: 1,
            };
            setOrders([...orders, newOrder]);
        } else {
            const newItems = orders.map((orderItem, index) => {
                if (index === orderIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrders(newItems);
        }
    };

    const removeOrder = (id) => {
        setOrders(orders.filter((el) => el.mainId !== id));
    };

    const incQuantity = (id) => {
        const newOrders = orders.map((el) => {
            if (el.mainId === id) {
                return {
                    ...el,
                    quantity: el.quantity + 1,
                };
            } else {
                return el;
            }
        });
        setOrders(newOrders);
    };

    const decQuantity = (id) => {
        const newOrders = orders.map((el) => {
            if (el.mainId === id) {
                return {
                    ...el,
                    quantity: el.quantity >= 1 ? el.quantity - 1 : 0,
                };
            } else {
                return el;
            }
        });
        setOrders(newOrders);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

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
            <Basket
                quantity={orders.length}
                handleBasketShow={handleBasketShow}
            />
            {loading ? (
                <Preloader />
            ) : (
                <ItemsList items={items} addOrder={addOrder} />
            )}
            {isBasketShow && (
                <OrderList
                    orders={orders}
                    handleBasketShow={handleBasketShow}
                    removeOrder={removeOrder}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
        </main>
    );
}

export { Shop };
