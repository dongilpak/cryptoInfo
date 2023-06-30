import React, { useEffect } from 'react';
import '../styles/Main.css';
import Market from '../components/Market';
import { useAppDispatch, useAppSelector } from '../hooks';
import { asyncGetMarket } from '../reducers/marketReducer';
import OrderBook from '../components/OrderBook';
import { asyncGetOrderBook } from '../reducers/orderBookReducer';

const Main = () => {
    const dispatch = useAppDispatch();
    const market = useAppSelector(state => state.market.value);

    useEffect(() => {
        dispatch(asyncGetMarket());
    }, []);

    useEffect(() => {
        if (market.length > 0) {
            dispatch(asyncGetOrderBook(market[0].market));
        }
    }, [dispatch, market]);

    return (
        <div id='main'>
            <Market />
            <OrderBook />
        </div>
    );
};

export default Main;
