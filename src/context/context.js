import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    items: [],
    loading: true,
    orders: [],
    isBasketShow: false,
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.removeOrder = (orderId) => {
        dispatch({ type: 'REMOVE_ORDER', payload: { id: orderId } });
    };

    value.addOrder = (order) => {
        dispatch({ type: 'ADD_ORDER', payload: { order: order } });
    };

    value.incQuantity = (orderId) => {
        dispatch({ type: 'INC_QUANTITY', payload: { id: orderId } });
    };

    value.decQuantity = (orderId) => {
        dispatch({ type: 'DEC_QUANTITY', payload: { id: orderId } });
    };

    value.handleBasketShow = () => {
        dispatch({ type: 'TOGGLE_BASKET' });
    };

    value.setItems = (data) => {
        dispatch({ type: 'SET_ITEMS', payload: { data: data } });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
