import React from 'react';
import { shallow } from 'enzyme';

import NCounter from '../NCounter';


describe.only('<NCounter />', () => {
    it('should render', () => {
        const actual = shallow(
            <NCounter
                value={1}
                onChange={() => {}}
            />
        );
    });

    it('should render n', () => {
        const n = 1;
        const actual = shallow(
            <NCounter
                value={n}
                onChange={() => {}}
            />
        );

        expect(+actual.find('.n-counter__value').text()).toEqual(n);
    });

    it('should increase n when user click on plus', () => {
        const n = 1;
        const onChange = jest.fn();
        const actual = shallow(
            <NCounter
                value={n}
                onChange={onChange}
            />
        );

        actual.find('.n-counter__control').first().simulate('click');

        expect(onChange).toHaveBeenCalledWith(n - 1);
    });

    it('should increase n when user click on plus', () => {
        const n = 1;
        const onChange = jest.fn();
        const actual = shallow(
            <NCounter
                value={n}
                onChange={onChange}
            />
        );

        actual.find('.n-counter__control').last().simulate('click');

        expect(onChange).toHaveBeenCalledWith(n + 1);
    });
});
