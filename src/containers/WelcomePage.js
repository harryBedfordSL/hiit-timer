import React, { Component } from 'react';
import PositiveButton from '../components/buttons/PositiveButton';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import SettingsModal from '../components/modals/SettingsModal';
import { withRedux } from '../utils/WithRedux';
import styles from './WelcomePage.module.css';

class WelcomePage extends Component {
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
        const { theme, toggleTheme, soundOn, toggleSound } = this.props;
        return (
            <div className={styles.page} style={theme.page}>
                {this.state.showSettingsModal && <div className={styles.backdrop} />}
                <SettingsModal
                    show={this.state.showSettingsModal}
                    handleClose={this.closeSettingsModal}
                    toggleTheme={toggleTheme}
                    theme={theme}
                    soundOn={soundOn}
                    toggleSound={toggleSound}
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
                                theme={theme}
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

export default withRedux(WelcomePage);
