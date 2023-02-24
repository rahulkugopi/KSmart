import React from 'react';
import styles from '../../styles/Header/Header.module.scss';
import logo from '../../assests/images/logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Header() {
    return (
        <div className={styles.Header} data-testid='Header'>
            <div className={styles.HeaderLeft}>
                <img src={logo} alt='logo' title='logo' />
            </div>

            <div className={styles.HeaderCenter}>
                <span className={styles.HdrSpl}>
                    <SearchIcon className={styles.iconSubView} /> Maintain
                    <KeyboardArrowDownIcon className={styles.arrowDown} />
                </span>
                <span>
                    <AttachMoneyIcon className={styles.iconSubView} /> Payments
                </span>
                <span>
                    <SearchIcon className={styles.iconSubView} /> Reports
                </span>
            </div>

            <div className={styles.HeaderRight}>
                <div className={styles.userSection}>
                    <SearchIcon className={styles.iconView} />
                    <SettingsIcon className={styles.iconView} />
                    <HelpOutlineIcon className={styles.iconView} />
                    <Avatar className={styles.avatar}>JS</Avatar>
                    <p>
                        John Snow
                        <span>Municipality officer</span>
                    </p>
                    <KeyboardArrowDownIcon className={styles.arrowDown} />
                </div>
            </div>
        </div>
    )
}

export default Header