import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../../styles/Layout/Layout.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout() {
    return (
        <div className={styles.Layout} data-testid='Layout'>
            <div className={styles.LayoutInner}>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default Layout