import React from 'react';
import { shallow } from 'enzyme';
import NeutralButton from "../../../components/buttons/NeutralButton";

const args = {};
const icon = 'plus';
const size = 'small';
const theme = { neutralButton: { color: 'gray' } };
const createComponent = (disabled, handleClick) => {
    return shallow(<NeutralButton 
        handleClick={handleClick}
        args={args}
        icon={icon}
        size={size}
        disabled={disabled}
        theme={theme}
    />)
}

describe('Neutral button tests', () => {
    test('renders without crashing', () => {
        const wrapper = createComponent(false, jest.fn());

        expect(wrapper.exists()).toBe(true);
    })

    
    test('onClick calls correct method when provided', () => {
        const handleClick = jest.fn();
        const wrapper = createComponent(false, handleClick);

        wrapper.find('.neutralButton').simulate('click');

        expect(handleClick).toHaveBeenCalledWith(args);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    test('onClick calls no method when handleclick not provided', () => {
        const handleClick = jest.fn();
        const wrapper = createComponent(false);

        wrapper.find('.neutralButton').simulate('click');

        expect(handleClick).toHaveBeenCalledTimes(0);
    })

    test('correct styling', () => {
        const handleClick = jest.fn();
        const wrapper = createComponent(false, handleClick);

        const buttonProps = wrapper.props();
        const iconProps = buttonProps.children.props;        

        expect(buttonProps.className).toEqual('neutralButton');
        expect(buttonProps.disabled).toEqual(false);
        expect(buttonProps.style).toBe(theme.neutralButton);
        expect(iconProps.className).toEqual('icon');
        expect(iconProps.name).toBe(icon);
        expect(iconProps.size).toBe(size);
    })
})