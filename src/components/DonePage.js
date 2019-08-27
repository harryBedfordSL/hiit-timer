import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PositiveButton from './buttons/PositiveButton';
import styles from './DonePage.module.css';

export default class DonePage extends Component {
    render = () => {
        return (
            <div className={styles.page}>
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
    }
}
