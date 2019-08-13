import React from 'react';
import styles from './EditModal.module.css';
import PositiveButton from './buttons/PositiveButton';
import NegativeButton from './buttons/NegativeButton';

const EditModal = ({ handleClose, show, children}) => {
    return (
        <div className={show ? styles.showModal : styles.hideModal}>
            <div className={styles.toolBar}>
                <NegativeButton
                    onClick={handleClose}
                    icon='close'
                    size='mini'
                />
            </div>
            <div className={styles.modalBody}>
                <div className={styles.exerciseName}>
                    {children}
                </div>
                <div className={styles.options}>
                    <NegativeButton icon='trash' size='small'/>
                    <PositiveButton icon='edit' size='small' />
                </div>
            </div>
        </div>
    )
}

export default EditModal;