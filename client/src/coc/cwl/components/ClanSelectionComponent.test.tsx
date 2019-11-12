import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ClanSelectionComponent, { ClanSelectionFormProps } from './ClanSelectionComponent';


const INITAL_PROPS: ClanSelectionFormProps = {
    onFetchCwlInfo: jest.fn()
};

interface WrapperData {
    wrapper: ReactWrapper,
    props: ClanSelectionFormProps
}

const setup = (customProps: Partial<ClanSelectionFormProps> = {}): WrapperData => {
    const props: ClanSelectionFormProps = {
        ...INITAL_PROPS,
        ...customProps
    };

    const wrapper = mount(<ClanSelectionComponent {...props} />);
    return {wrapper, props}
};

describe('it renders clan selection', () => {
    it('renders without crash', () => {
        const {wrapper} = setup();
        expect(wrapper.find(ClanSelectionComponent)).toBeDefined();
        const selectClanBtn = wrapper.find('#clan-selection-btn');
        expect(selectClanBtn).toBeDefined();
    });

    it.skip('calls fetchCwlInfo callback function when button is clicked', () => {
        const {wrapper, props} = setup();
        const selectClanBtn = wrapper.find('button').at(0);
        selectClanBtn.simulate('click');
        expect(props.onFetchCwlInfo).toHaveBeenCalled();
    });
});