import * as actions from '../actions';
import reducer from '../reducer';


describe('Screen reducer', () => {
    it('default state', () => {
        const state = reducer(undefined, {});

        expect(state).toBe('menu');
    });

    it('should change screen', () => {
        const nextScreen = 'game';
        const state = reducer(undefined, actions.change(nextScreen));

        expect(state).toBe(nextScreen);
    });
});
