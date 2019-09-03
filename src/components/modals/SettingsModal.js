import React, { Component } from 'react';
import NegativeButton from '../buttons/NegativeButton';
import styles from './SettingsModal.module.css';
import Toggle from '../Toggle';

export default class SettingsModal extends Component {
    render = () => {
        const { handleClose, show, toggleTheme, theme, toggleSound, soundOn } = this.props;
        return (
            <div className={show ? styles.showModal : styles.hideModal} style={theme.modal}>
                <div className={styles.toolbar}>
                    <NegativeButton
                        onClick={() => handleClose()}
                        icon='close'
                        size='small'
                        theme={theme}
                    />
                </div>
                <div className={styles.title}>
                    Settings
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.setting}>
                        Sound
                        <Toggle
                            id='sound-setting'
                            leftIcon='alarm mute'
                            rightIcon='alarm'
                            checked={!soundOn}
                            handleChange={toggleSound}
                            args={soundOn}
                        />
                    </div>
                    <div className={styles.setting}>
                        Theme
                        <Toggle 
                            id='theme-setting'
                            leftIcon='sun'
                            rightIcon='moon'
                            checked={theme.mode === 'light'}
                            handleChange={toggleTheme}
                            args={theme}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
