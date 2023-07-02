import React, { useEffect } from 'react';
import '../styles/Main.css';
import Market from '../components/Market';
import { useAppDispatch, useAppSelector } from '../hooks';
import { asyncGetMarket } from '../reducers/marketReducer';
import OrderBook from '../components/OrderBook';
import { asyncGetOrderBook } from '../reducers/orderBookReducer';
import RecentTrades from '../components/RecentTrades';
import { asyncGetRecentTrades } from '../reducers/recentTradesReducer';
import MarketNews from '../components/MarketNews';
import OrderHistory from '../components/OrderHistory';

const Main = () => {
    const dispatch = useAppDispatch();
    const market = useAppSelector(state => state.market.value);

    useEffect(() => {
        dispatch(asyncGetMarket());
    }, []);

    useEffect(() => {
        if (market.length > 0) {
            dispatch(asyncGetOrderBook(market[0].market));
            dispatch(asyncGetRecentTrades(market[0].market));
        }
    }, [dispatch, market]);

    return (
        <div id='main'>
            <div className='upperContainer'>
                <Market />
                <div className='trade__info'>
                    <OrderBook />
                    <RecentTrades />
                </div>
            </div>
            <div className='bottomContainer'>
                <MarketNews />
                <OrderHistory />
            </div>
        </div>
    );
};

export default Main;
