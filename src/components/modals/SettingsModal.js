import React, { Component } from 'react';
import NegativeButton from '../buttons/NegativeButton';
import styles from './SettingsModal.module.css';
import NeutralButton from '../buttons/NeutralButton';

export default class SettingsModal extends Component {
    render = () => {
        const { handleClose, show} = this.props;
        return (
            <div className={show ? styles.showModal : styles.hideModal}>
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
                        <NeutralButton />
                    </div>
                </div>
            </div>
        )
    }
}
