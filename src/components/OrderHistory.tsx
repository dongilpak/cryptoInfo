import React from 'react';
import '../styles/OrderHistory.css';
import { ReactComponent as Note } from '../assets/note.svg';

const OrderHistory = () => {
    const handleNavClickOn = (e: React.MouseEvent<HTMLElement>) => {
        const spanAll = e.currentTarget.querySelectorAll('div > span');

        spanAll.forEach(span => (span.className = ''));

        const target = e.target as HTMLSpanElement;

        target.className = 'on';
    };

    return (
        <div id='orderHistory'>
            <nav
                className='orderHistory__nav'
                onClick={e => handleNavClickOn(e)}
            >
                <div>
                    <span className='on'>Open Orders</span>
                </div>
                <div>
                    <span>Closed Orders</span>
                </div>
                <div>
                    <span>Order history</span>
                </div>
                <div>
                    <span>Balance</span>
                </div>
            </nav>
            <div className='orderHistory__data'>
                <div className='dataName'>
                    <div>
                        <span>Time</span>
                    </div>
                    <div>
                        <span>All pairs</span>
                    </div>
                    <div>
                        <span>All Types</span>
                    </div>
                    <div>
                        <span>Buy/Sell</span>
                    </div>
                    <div>
                        <span>Price</span>
                    </div>
                    <div>
                        <span>Amount</span>
                    </div>
                    <div>
                        <span>Executed</span>
                    </div>
                    <div>
                        <span>Unexecuted</span>
                    </div>
                </div>
                <div className='dataDisplay'>
                    <Note />
                    <span>No data</span>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
