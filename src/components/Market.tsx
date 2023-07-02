import React from 'react';
import { ReactComponent as Glass } from '../assets/magnifying-glass.svg';
import '../styles/Market.css';
import { useAppDispatch, useAppSelector } from '../hooks';
import { searchMarket } from '../reducers/marketReducer';
import { asyncGetOrderBook } from '../reducers/orderBookReducer';
import { asyncGetRecentTrades } from '../reducers/recentTradesReducer';

const Market = () => {
    const dispatch = useAppDispatch();
    const marketData = useAppSelector(state => state.market.value);
    const searchData = useAppSelector(state => state.market.searchData);

    const handleChangeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();

        const term = e.currentTarget.value;

        dispatch(searchMarket(term));
    };

    const handleClickMarket = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.querySelector(
            '.market__name'
        ) as HTMLSpanElement;

        dispatch(asyncGetOrderBook(value.innerHTML));
        dispatch(asyncGetRecentTrades(value.innerHTML));
    };

    return (
        <div id='market'>
            <div className='market__search'>
                <div className='search__icon'>
                    <Glass />
                </div>
                <input
                    type='text'
                    placeholder='Search'
                    onKeyUp={e => handleChangeInput(e)}
                />
            </div>
            <ul className='market__list'>
                {searchData.length > 0
                    ? searchData.map(data => {
                          return (
                              <li key={data.market}>
                                  <button onClick={e => handleClickMarket(e)}>
                                      <span className='market__name'>{`${data.market}`}</span>
                                      <span>{`${data.korean_name}`}</span>
                                  </button>
                              </li>
                          );
                      })
                    : marketData.map(data => {
                          return (
                              <li key={data.market}>
                                  <button onClick={e => handleClickMarket(e)}>
                                      <span className='market__name'>{`${data.market}`}</span>
                                      <span>{`${data.korean_name}`}</span>
                                  </button>
                              </li>
                          );
                      })}
            </ul>
        </div>
    );
};

export default Market;
