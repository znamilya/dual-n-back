import React from 'react';

import AnswerResult from '../AnswerResult';


describe('<AnswerResult />', () => {
    it('should not be rendered if there is no an answer', () => {
        const component = shallow(
            <AnswerResult />
        );
        expect(component).toMatchSnapshot();
    });

    it('should render respective text if there is an answer', () => {
        let component = shallow(
            <AnswerResult has correct={true} />
        );
        expect(component).toMatchSnapshot();

        component = shallow(
            <AnswerResult has correct={false} />
        );
        expect(component).toMatchSnapshot();
    });
});
