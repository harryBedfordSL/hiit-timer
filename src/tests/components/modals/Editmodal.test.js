import React from 'react';
import { shallow } from 'enzyme';
import EditModal from '../../../components/modals/EditModal';

const handleClose = jest.fn();
const show = false;
const exerciseToEdit = 'exercise';
const numberInList = 1;
const deleteExercise = jest.fn();
const save = jest.fn();
const theme = { modal : {color: 'gray' }};

const createComponent = () => {
    return shallow(<EditModal 
        handleClose={handleClose}
        show={show}
        exerciseToEdit={exerciseToEdit}
        numberInList={numberInList}
        deleteExercise={deleteExercise}
        save={save}
        theme={theme}
    />)
}

describe('EditModal tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createComponent(); 
    })

    test('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    })

    test('clicking the cross calls the close modal prop', () => {
        wrapper.find('.closeModal').simulate('click');

        expect(wrapper.state('editing')).toEqual(false);
        expect(handleClose).toBeCalledTimes(1);
    })
    
    test('clicking edit button enters edit mode', () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'enableEditMode');
        wrapper.find('.editButton').simulate('click');

        expect(wrapper.state('editing')).toBe(true);
        expect(wrapper.state('editedExercise')).toBe(exerciseToEdit);
        expect(wrapper.state('disableSave')).toEqual(exerciseToEdit.length === 0);
        expect(spy).toBeCalledWith(exerciseToEdit);
        expect(spy).toBeCalledTimes(1);
    })
    
    test('clicking save exits edit mode and closes modal', () => {
        wrapper.find('.editButton').simulate('click');
        wrapper.find('.saveButton').simulate('click');

        expect(wrapper.state('editing')).toBe(false);
        expect(save).toBeCalledTimes(1);
        expect(save).toBeCalledWith(wrapper.state('editedExercise'));
    })
    
    test('clicking delete exits edit mode and calls close modal', () => {
        wrapper.find('.deleteExercise').simulate('click');

        expect(wrapper.state('editing')).toBe(false)
        expect(deleteExercise).toBeCalledTimes(1);
    })
})
