import * as actions from '../actions';
import reducer from '../reducer';


describe('Screen reducer', () => {
    it('default value', () => {
        const actual = reducer(undefined, {});

        expect(actual).toBe('menu');
    });

    it('should change screen', () => {
        const nextScreen = 'game';
        const actual = reducer(undefined, actions.change(nextScreen));

        expect(actual).toBe(nextScreen);
    });
});
