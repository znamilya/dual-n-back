import React from 'react';

import NCounter from '../NCounter';


describe.only('<NCounter />', () => {
    it('should render', () => {
        const wrapper = shallow(
            <NCounter
                value={1}
                onChange={() => {}}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render n', () => {
        const n = 1;
        const wrapper = shallow(
            <NCounter
                value={n}
                onChange={() => {}}
            />
        );

        expect(+wrapper.find('.n-counter__value').text()).toEqual(n);
    });

    it('should increase n when user click on plus', () => {
        const n = 1;
        const onChange = jest.fn();
        const wrapper = shallow(
            <NCounter
                value={n}
                onChange={onChange}
            />
        );

        wrapper.find('.n-counter__control').first().simulate('click');

        expect(onChange).toHaveBeenCalledWith(n - 1);
    });

    it('should increase n when user click on plus', () => {
        const n = 1;
        const onChange = jest.fn();
        const wrapper = shallow(
            <NCounter
                value={n}
                onChange={onChange}
            />
        );

        wrapper.find('.n-counter__control').last().simulate('click');

        expect(onChange).toHaveBeenCalledWith(n + 1);
    });
});
