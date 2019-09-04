import React from 'react';
import { shallow } from 'enzyme';
import SettingsModal from '../../../components/modals/SettingsModal';

const handleClose = jest.fn();
const show = false;
const toggleTheme = jest.fn(); 
const theme = { modal: { color: 'gray' } }
const toggleSound = jest.fn();
const soundOn = true;
const createComponent = () => {
    return shallow(<SettingsModal 
        handleClose={handleClose}
        show={show}
        toggleSound={toggleSound}
        toggle={toggleTheme}
        theme={theme}
        soundOn={soundOn}
    />)
}

describe('Settings modal tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createComponent();
    })

    test('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    })

    test('clicking close calls handle close', () => {
        wrapper.find('.closeButton').simulate('click');

        expect(handleClose).toBeCalledTimes(1);
    })
})