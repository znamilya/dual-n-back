import React from 'react';

import Board from '../Board';


describe('<Board />', () => {
    it('should render itself', () => {
        const wrapper = shallow(
            <Board
                step={1}
                position={1}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should add active class to active cell', () => {
        const position = 1;
        const wrapper = shallow(
            <Board
                step={1}
                position={position}
            />
        );

        expect(wrapper.find('.board__cell').at(position).hasClass('board__cell_active')).toBe(true);
    });
});
