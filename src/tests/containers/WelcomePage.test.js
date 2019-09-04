import React from 'react';
import { shallow } from 'enzyme';
import { WelcomePage } from '../../containers/WelcomePage';

const theme = { page: { color: 'gray' } };
const toggleTheme = jest.fn();
const soundOn = true;
const toggleSound = jest.fn();
const createComponent = () => {
    return shallow(<WelcomePage
        theme={theme}
        toggleTheme={toggleTheme}
        soundOn={soundOn}
        toggleSound={toggleSound}
    />)
}

describe('Welcome page tests', () => {
    test('renders with correct initial state', () => {
        const wrapper = createComponent();

        expect(wrapper.state('showSettingsModal')).toBe(false);
    });

    test('clicking settings button sets the state correctly', () => {
        const wrapper = createComponent();

        wrapper.find('.settingsButton').simulate('click');
        
        expect(wrapper.state('showSettingsModal')).toBe(true);
    });

    test('check openSettingsModal updates state correctly', () => {
        const wrapper = createComponent();
        const instance = wrapper.instance();

        instance.openSettingsModal();

        expect(wrapper.state("showSettingsModal")).toBe(true);
    });
})