import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Footer/Footer.module.scss';

function Footer() {
    return (
        <div className={styles.Footer} data-testid='Footer'>
            <div className={styles.footerLeft}>
                <p>© {new Date().getFullYear()} Company</p>
            </div>
            <div className={styles.footerRight}>
                <Link>Home</Link>
                <Link>Terms of Use</Link>
                <Link>Contact</Link>
            </div>
        </div>
    )
}

export default Footer