import React from 'react';
import { Link } from 'react-router-dom';
import PositiveButton from './buttons/PositiveButton';
import styles from './DonePage.module.css';
import { withRedux } from '../utils/WithRedux';

export function DonePage({theme}) {
    return (
        <div className={styles.page} style={theme.page}>
            <div className={styles.title}>
                Done
            </div>
            <Link to="/welcome" className={styles.btn}>
                <PositiveButton
                    icon='repeat'
                    size='big'   
                    theme={theme} 
                />
            </Link>
        </div>
    )
}

export default withRedux(DonePage);
