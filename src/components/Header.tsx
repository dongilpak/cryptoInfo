import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';
import { ReactComponent as Bell } from '../assets/bell.svg';
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Lock } from '../assets/lock.svg';
import { ReactComponent as Exclamation } from '../assets/circle-exclamation.svg';
import { ReactComponent as Android } from '../assets/android.svg';
import { ReactComponent as Bitcoin } from '../assets/bitcoin.svg';
import { ReactComponent as Dollar } from '../assets/dollar.svg';
import { ReactComponent as Wallet } from '../assets/wallet.svg';
import { ReactComponent as Setting } from '../assets/gear.svg';
import { ReactComponent as LogOut } from '../assets/power-off.svg';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Header = () => {
    const [showBell, setShowBell] = useState('');
    const [showUser, setShowUser] = useState('');

    useEffect(() => {
        const app = document.querySelector('.container') as HTMLDivElement;
        const bell = app.querySelector('.bell__container') as HTMLDivElement;
        const user = app.querySelector('.user__container') as HTMLDivElement;

        bell.addEventListener('click', e => {
            e.stopPropagation();
            showBell === '' ? setShowBell('show') : setShowBell('');
            if (showUser === 'show') {
                setShowUser('');
            }
            return;
        });
        user.addEventListener('click', e => {
            e.stopPropagation();
            showUser === '' ? setShowUser('show') : setShowUser('');
            if (showBell === 'show') {
                setShowBell('');
            }
            return;
        });
        app.addEventListener('click', () => {
            if (showBell === 'show' || showUser === 'show') {
                setShowBell('');
                setShowUser('');
                return;
            }
        });
    }, [showBell, showUser]);

    return (
        <header className='header'>
            <div className='header__front'>
                <Logo />
                <Link to='/main'>
                    <h1>CryptoFo</h1>
                </Link>
            </div>
            <div className='header__back'>
                <div className='moon__container'>
                    <button>
                        <Moon />
                    </button>
                </div>
                <div className='bell__container'>
                    <button value='bell'>
                        <Bell />
                    </button>
                    <Dropdown className={`${showBell}`}>
                        <div className='notification'>
                            <div className='notification__header'>
                                <span>5 New Notifications</span>
                                <a href='#!'>Clear all</a>
                            </div>
                            <ul>
                                <li>
                                    <div className='notification__icon'>
                                        <Lock />
                                    </div>
                                    <div className='notification__text'>
                                        <span>Account password change</span>
                                        <span>5 sec ago</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='notification__icon'>
                                        <Exclamation />
                                    </div>
                                    <div className='notification__text'>
                                        <span>Solve the security issue</span>
                                        <span>10 min ago</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='notification__icon'>
                                        <Android />
                                    </div>
                                    <div className='notification__text'>
                                        <span>Download android app</span>
                                        <span>1 hrs ago</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='notification__icon'>
                                        <Bitcoin />
                                    </div>
                                    <div className='notification__text'>
                                        <span>Bitcoin price is high now</span>
                                        <span>2 hrs ago</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='notification__icon'>
                                        <Dollar />
                                    </div>
                                    <div className='notification__text'>
                                        <span>Payment completed</span>
                                        <span>4 hrs ago</span>
                                    </div>
                                </li>
                            </ul>
                            <div className='notification__more'>
                                <a href='#!'>View all</a>
                            </div>
                        </div>
                    </Dropdown>
                </div>
                <div className='user__container'>
                    <button value='user'>
                        <User />
                    </button>
                    <Dropdown className={`${showUser}`}>
                        <div className='user__dropdown'>
                            <div className='user__dropdown-personal'>
                                <div>
                                    <User />
                                </div>
                                <span className='user__name'>Tony Stark</span>
                                <span className='user__email'>
                                    tonystark@gmail.com
                                </span>
                            </div>
                            <div className='user__dropdown-control'>
                                <ul className='dropdown-control-box'>
                                    <li className='dropdown-control-list'>
                                        <Link to='#!'>
                                            <User />
                                            <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li className='dropdown-control-list'>
                                        <Link to='#!'>
                                            <Wallet />
                                            <span>My Wallet</span>
                                        </Link>
                                    </li>
                                    <li className='dropdown-control-list'>
                                        <Link to='#!'>
                                            <Setting />
                                            <span>Settings</span>
                                        </Link>
                                    </li>
                                    <li className='dropdown-control-list'>
                                        <Link to='#!'>
                                            <LogOut />
                                            <span>Log Out</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Header;
