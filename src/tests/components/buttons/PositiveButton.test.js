import React from 'react';
import { shallow } from 'enzyme';
import PositiveButton from '../../../components/buttons/PositiveButton';

const onClick = jest.fn();
const icon = 'close';
const size = 'small';
const theme = { positiveButton: { color: 'black' } };
const createComponent = (disabled) => {
    return shallow(<PositiveButton
        disabled={disabled}
        onClick={onClick} 
        icon={icon}
        size={size}
        theme={theme}
    />);
}

describe('Positive button tests', () => {  
    test('renders without crashing', () => {
        const wrapper = createComponent(false);

        expect(wrapper.exists()).toBe(true);
    })

    test('onClick is called correctly', () => {
        const wrapper = createComponent(false);

        wrapper.find('.posBtn').simulate('click');

        expect(onClick).toHaveBeenCalledTimes(1);
    })

    test('correct styling for disabled positive button', () => {
        const wrapper = createComponent(true);

        const buttonProps = wrapper.props();
        const iconProps = buttonProps.children.props;

        expect(buttonProps.className).toEqual('disabledBtn');
        expect(buttonProps.disabled).toEqual(true);
        expect(buttonProps.style).toBe(theme.positiveButton);
        expect(iconProps.className).toEqual('icon');
        expect(iconProps.name).toBe(icon);
        expect(iconProps.size).toBe(size);
    })

    test('correct styling fot enabled positive button', () => {
        const wrapper = createComponent(false);

        const buttonProps = wrapper.props();
        const iconProps = buttonProps.children.props;

        expect(buttonProps.className).toEqual('posBtn');
        expect(buttonProps.disabled).toEqual(false);
        expect(buttonProps.style).toBe(theme.positiveButton);
        expect(iconProps.className).toEqual('icon');
        expect(iconProps.name).toBe(icon);
        expect(iconProps.size).toBe(size);
    })
})

