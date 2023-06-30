import React, { useEffect, useState } from 'react';
import '../styles/OrderBook.css';
import { useAppSelector } from '../hooks';
import { orderBookUnit } from '../reducers/orderBookReducer';

const OrderBook = () => {
    const [units, setUnits] = useState<orderBookUnit[]>([]);

    const orderBook = useAppSelector(state => state.orderBook.value);

    useEffect(() => {
        if (orderBook.length > 0) {
            const orderBook_units = orderBook[0].orderbook_units;
            setUnits([...orderBook_units]);
        }
    }, [orderBook]);

    useEffect(() => {
        const orderBook_info = document.querySelector(
            '.orderBook__info'
        ) as HTMLDivElement;

        orderBook_info.scroll(0, 370);
    });

    return (
        <div id='orderBook'>
            <div className='orderBook__title'>
                <span>Order Book</span>
            </div>
            <div className='orderBook__container'>
                <div className='orderBook__info'>
                    <div className='orderBook__ask'>
                        <ul className='ask__list'>
                            {units.reverse().map(unit => {
                                return (
                                    <li
                                        className='ask__item'
                                        key={unit.ask_price}
                                    >
                                        <div className='ask__count'>
                                            {unit.ask_size.toFixed(3)}
                                        </div>
                                        <div className='ask__price'>
                                            {unit.ask_price < 1
                                                ? unit.ask_price.toFixed(8)
                                                : unit.ask_price.toLocaleString(
                                                      'ko-KR'
                                                  )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='ask__empty'></div>
                    </div>
                    <div className='orderBook__bid'>
                        <div className='bid__empty'></div>
                        <ul className='bid__list'>
                            {units.map(unit => {
                                return (
                                    <li
                                        className='bid__item'
                                        key={unit.bid_price}
                                    >
                                        <div className='bid__price'>
                                            {unit.bid_price < 1
                                                ? unit.bid_price.toFixed(8)
                                                : unit.bid_price.toLocaleString(
                                                      'ko-KR'
                                                  )}
                                        </div>
                                        <div className='bid__count'>
                                            {unit.bid_size.toFixed(3)}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className='orderBook__total'>
                    {orderBook.length > 0 ? (
                        <>
                            <div className='total__ask'>
                                {orderBook[0].total_ask_size.toFixed(3)}
                            </div>
                            <div className='total__count'>수량</div>
                            <div className='total__bid'>
                                {orderBook[0].total_bid_size.toFixed(3)}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='total__ask'>0</div>
                            <div className='total__count'>수량</div>
                            <div className='total__bid'>0</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderBook;
