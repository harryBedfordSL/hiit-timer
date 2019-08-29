import React from 'react';
import { Link } from 'react-router-dom';
import PositiveButton from './buttons/PositiveButton';
import styles from './DonePage.module.css';
import { withRedux } from '../utils/WithRedux';

export default withRedux(function DonePage({theme}) {
    return (
        <div className={styles.page} style={theme.page}>
            <div className={styles.title}>
                Done
            </div>
            <Link to="/welcome" className={styles.btn}>
                <PositiveButton
                    icon='repeat'
                    size='big'    
                />
            </Link>
        </div>
    )
})
