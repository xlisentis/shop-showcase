export function reducer(state, { type, payload }) {
    switch (type) {
        case 'REMOVE_ORDER':
            return {
                ...state,
                orders: state.orders.filter((el) => el.mainId !== payload.id),
            };
        case 'ADD_ORDER': {
            const orderIndex = state.orders.findIndex(
                (el) => el.mainId === payload.order.mainId
            );

            let newItems = null;
            if (orderIndex < 0) {
                const newOrder = {
                    ...payload.order,
                    quantity: 1,
                };
                newItems = [...state.orders, newOrder];
            } else {
                newItems = state.orders.map((orderItem, index) => {
                    if (index === orderIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                orders: newItems,
            };
        }
        case 'INC_QUANTITY':
            return {
                ...state,
                orders: state.orders.map((el) => {
                    if (el.mainId === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity + 1,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'DEC_QUANTITY':
            return {
                ...state,
                orders: state.orders.map((el) => {
                    if (el.mainId === payload.id) {
                        return {
                            ...el,
                            quantity: el.quantity >= 1 ? el.quantity - 1 : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case 'SET_ITEMS':
            return {
                ...state,
                items: payload.data || [],
                loading: false,
            };
        default:
            return state;
    }
}
