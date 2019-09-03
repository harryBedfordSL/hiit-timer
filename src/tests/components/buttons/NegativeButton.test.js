import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import NegativeButton from '../../../components/buttons/NegativeButton';

// move arranges to standardised place
// const onClick = () => {};
// const icon = 'close';
// const size = 'small';
// const theme = 'test';

describe('Negative button tests', () => {
    // let btn;
    // beforeEach(() => {
    //     negativeButton = shallow(<NegativeButton
    //         onClick={onClick} 
    //         icon={icon}
    //         size={size}
    //         theme={theme}
    //     />)
    // })

    test('renders without crashing (with snapshot)', () => {
        // Arrange
        const onClick = () => {};
        const icon = 'close';
        const size = 'small';
        const theme = 'test';
        
        // Act
        const negBtn = create(<NegativeButton 
            onClick={onClick} 
            icon={icon}
            size={size}
            theme={theme}
        />);

        // Assert
        expect(negBtn.toJSON()).toMatchSnapshot();
    })

    test('renders without crashing (with enzyme)', () => {
        // Arrange
        const onClick = () => {};
        const icon = 'close';
        const size = 'small';
        const theme = 'test';
        
        // Act
        const wrapper = shallow(<NegativeButton
            onClick={onClick} 
            icon={icon}
            size={size}
            theme={theme}
        />);

        // Assert
        expect(wrapper.exists()).toBe(true);        
    })

    test('onClick is called correctly', () => {
        // Arrange
        const onClick = jest.fn();
        const icon = 'close';
        const size = 'small';
        const theme = 'test';
        const wrapper = shallow(<NegativeButton 
            onClick={onClick} 
            icon={icon}
            size={size}
            theme={theme}
        />)

        // Act
        wrapper.find('.negBtn').simulate('click');

        // Assert
        expect(onClick).toHaveBeenCalledTimes(1);
    })

    test('correct styling for button and child icon', () => {
        // Arrange
        const onClick = () => {};
        const icon = 'close';
        const size = 'small';
        const theme = { negativeButton: { color: 'black' } };
        
        // Act
        const wrapper = shallow(<NegativeButton
            onClick={onClick} 
            icon={icon}
            size={size}
            theme={theme}
        />);

        // Assert
        const buttonProps = wrapper.find('.negBtn').get(0).props;
        const iconProps = wrapper.find('.negBtn').get(0).props.children.props;
        expect(buttonProps.className).toEqual('negBtn');
        expect(buttonProps.style).toBe(theme.negativeButton);
        expect(iconProps.className).toEqual('icon');
        expect(iconProps.name).toBe(icon);
        expect(iconProps.size).toBe(size);
    })
})

