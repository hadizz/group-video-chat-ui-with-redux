import React from 'react';
import styles from './Header.module.css';
import UniClient from '../../Resources/Images/UniClient.svg';
import Clock from '../../Resources/Images/Clock.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={UniClient} alt="uni client" />
            <span className="mr-16">Case Of Kennedy Murder</span>
            <div className="pt-4 mr-8">
                <img src={Clock} alt="clock" />
            </div>
            <span className={styles.time}>(45:32)</span>
        </div>
    );
};

export default Header;
