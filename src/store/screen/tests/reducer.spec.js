import * as actions from '../actions';
import reducer from '../reducer';


describe('Screen reducer', () => {
    it('should return default state', () => {
        const state = reducer(undefined, {});

        expect(state).toBe('menu');
    });

    it('should change screen', () => {
        const expected = 'game';
        const actual = reducer(undefined, actions.change(expected));

        expect(actual).toBe(expected);
    });
});
