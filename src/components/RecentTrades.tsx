import React from 'react';
import '../styles/RecentTrades.css';
import { useAppSelector } from '../hooks';

const RecentTrades = () => {
    const recentData = useAppSelector(state => state.recentTrades.value);
    return (
        <div id='recentTrades'>
            <div className='recentTrades__title'>
                <span>Recent Trades</span>
            </div>
            <div className='recentTrades__container'>
                <div className='recentTrades__infoName'>
                    <div className='infoName__time'>
                        <span>Time</span>
                    </div>
                    <div className='infoName__price'>
                        <span>Price</span>
                    </div>
                    <div className='infoName__amount'>
                        <span>Amount</span>
                    </div>
                </div>
                <ul className='recentTrades__items'>
                    {recentData.map((data, index) => {
                        return (
                            <li
                                className='recentTrades__item'
                                key={data.sequential_id + index}
                            >
                                <div className='recentTrades__time'>
                                    <span>{data.trade_time_utc}</span>
                                </div>
                                <div className='recentTrades__price'>
                                    {data.trade_price < 1 ? (
                                        <span
                                            className={
                                                data.ask_bid === 'ASK'
                                                    ? 'askColor'
                                                    : 'bidColor'
                                            }
                                        >
                                            {data.trade_price.toFixed(8)}
                                        </span>
                                    ) : (
                                        <span
                                            className={
                                                data.ask_bid === 'ask'
                                                    ? 'askColor'
                                                    : 'bidColor'
                                            }
                                        >
                                            {data.trade_price.toLocaleString()}
                                        </span>
                                    )}
                                </div>
                                <div className='recentTrades__amount'>
                                    {data.trade_volume < 1 ? (
                                        <span>
                                            {data.trade_volume.toFixed(8)}
                                        </span>
                                    ) : (
                                        <span>
                                            {data.trade_volume.toFixed(1)}
                                        </span>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RecentTrades;
