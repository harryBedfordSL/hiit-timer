import React, { Component } from 'react';
import NegativeButton from '../buttons/NegativeButton';
import styles from './SettingsModal.module.css';
import Toggle from '../Toggle';

export default class SettingsModal extends Component {
    render = () => {
        const { handleClose, show, toggleTheme, theme } = this.props;
        return (
            <div className={show ? styles.showModal : styles.hideModal} style={theme.modal}>
                <div className={styles.toolbar}>
                    <NegativeButton
                        onClick={() => handleClose()}
                        icon='close'
                        size='small'
                    />
                </div>
                <div className={styles.title}>
                    Settings
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.theme}>
                        Theme
                        <Toggle 
                            leftIcon='sun'
                            rightIcon='moon'
                            handleChange={toggleTheme}
                            isLightMode={theme.mode === 'light'}
                            args={theme}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
