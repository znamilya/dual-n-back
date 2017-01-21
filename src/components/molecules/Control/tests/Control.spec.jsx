import React from 'react';
import { shallow } from 'enzyme';

import Control from '../Control';


jest.mock('components/atoms/HotKey/HotKey', () => 'HotKey');
jest.mock('components/atoms/AnswerResult/AnswerResult', () => 'AnswerResult');


describe('<Control />', () => {
    it('default render', () => {
        const component = shallow(
            <Control />
        );

        expect(component).toMatchSnapshot();
    });
});
