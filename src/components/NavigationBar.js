import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NeutralButton from './buttons/NeutralButton';
import PositiveButton from './buttons/PositiveButton';

import styles from './NavigationBar.module.css';

export default class NavigationBar extends Component {
    render() {
        const { isSettingValid, back, next, theme } = this.props;
        return (
            <div className={styles.navigation}>
                <Link to={back}>
                    <NeutralButton
                        icon={'angle left'}
                        size='big'
                        theme={theme}
                    />
                </Link>
                <Link to={next} className={isSettingValid ? styles.validLink : styles.invalidLink} >
                    <PositiveButton
                        icon={'angle right'}
                        size='big'
                        theme={theme}
                    />
                </Link>
            </div>
        )
    }
}
