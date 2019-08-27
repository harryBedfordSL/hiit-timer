import React, { Component } from 'react';
import PositiveButton from '../components/buttons/PositiveButton';
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';
import { Icon } from 'semantic-ui-react';
import SettingsModal from '../components/modals/SettingsModal';

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSettingsModal: false,
        }
        this.openSettingsModal = this.openSettingsModal.bind(this);
        this.closeSettingsModal = this.closeSettingsModal.bind(this);
    }

    openSettingsModal = () => {
        this.setState({
            showSettingsModal: true
        })
    }

    closeSettingsModal = () => {
        this.setState({
            showSettingsModal: false
        })
    }

    render() {
        return (
            <div className={styles.page}>
                {this.state.showSettingsModal && <div className={styles.backdrop} />}
                <SettingsModal
                    show={this.state.showSettingsModal}
                    handleClose={this.closeSettingsModal}
                />
                <div className={styles.content}>
                    <div className={styles.title}>
                        HIIT Timer
                    </div>
                    <div className={styles.body}>
                        Welcome
                    </div>
                    <div className={styles.next}>
                        <Link to="/exercises">
                            <PositiveButton
                                icon={'angle right'}
                                size='big'
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.settings}>
                    <Icon
                        name='setting'
                        size='big'
                        onClick={this.openSettingsModal}
                    />
                </div>
            </div>
        )
    }
}
