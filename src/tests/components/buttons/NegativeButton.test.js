import React from 'react';
import { shallow } from 'enzyme';
import NegativeButton from '../../../components/buttons/NegativeButton';

const onClick = jest.fn();
const icon = 'close';
const size = 'small';
const theme = 'test';

describe('Negative button tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NegativeButton
            onClick={onClick} 
            icon={icon}
            size={size}
            theme={theme}
        />)
    })

    test('renders without crashing (with enzyme)', () => {
        expect(wrapper.exists()).toBe(true);        
    })

    test('onClick is called correctly', () => {
        wrapper.find('.negBtn').simulate('click');

        expect(onClick).toHaveBeenCalledTimes(1);
    })

    test('correct styling for button and child icon', () => {
        const buttonProps = wrapper.find('.negBtn').get(0).props;
        const iconProps = wrapper.find('.negBtn').get(0).props.children.props;

        expect(buttonProps.className).toEqual('negBtn');
        expect(buttonProps.style).toBe(theme.negativeButton);
        expect(iconProps.className).toEqual('icon');
        expect(iconProps.name).toBe(icon);
        expect(iconProps.size).toBe(size);
    })
})

