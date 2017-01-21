import reducer, { defaultState } from '../reducer';
import { AVAILABLE_LETTERS, STAGE_MAP, STEPS_TOTAL_COUNT } from '../constants';
import * as actions from '../actions';


describe('Reducer game', () => {
    it('should return default state', () => {
        const actual = reducer(undefined, {});

        expect(actual).toBe(defaultState);
    });

    describe('prepare game', () => {
        it('should change stage', () => {
            const state = {
                ...defaultState,
            };
            const actual = reducer(state, actions.prepare());

            expect(actual.stage).toBe(STAGE_MAP.prepare);
        });

        it('should prepare score', () => {
            const state = {
                ...defaultState,
            };
            const actual = reducer(state, actions.prepare());

            expect(actual.score).toEqual({
                positions: STEPS_TOTAL_COUNT,
                letters: STEPS_TOTAL_COUNT,
            });
        });

        it('should prepare letters', () => {
            const state = {
                ...defaultState,
            };
            const actual = reducer(state, actions.prepare());

            const haveOnlyAvaliableLetters = actual.letters
                .every(letter => AVAILABLE_LETTERS.includes(letter));

            expect(actual.letters).toHaveLength(STEPS_TOTAL_COUNT);
            expect(haveOnlyAvaliableLetters).toBe(true);
        });

        it('should prepare positions', () => {
            const state = {
                ...defaultState,
            };
            const actual = reducer(state, actions.prepare());

            const haveOnlyAvaliablePositions = actual.positions
                .every(number => (number <= 9 || number >= 0));

            expect(actual.positions).toHaveLength(STEPS_TOTAL_COUNT);
            expect(haveOnlyAvaliablePositions).toBe(true);
        });
    });

    it('should update n', () => {
        for (let i = 1; i < 5; i++) {
            const state = {
                ...defaultState,
            };
            const actual = reducer(undefined, actions.updateN(i));

            expect(actual.n).toBe(i);
        }
    });

    it('should not set n high than 5', () => {
        const state = {
            ...defaultState,
        };
        const actual = reducer(undefined, actions.updateN(6));

        expect(actual.n).toBe(5);
    });

    it('should start game', () => {
        const actual = reducer(undefined, actions.start());

        expect(actual.stage).toBe(STAGE_MAP.running);
    });

    it('should ignore quess if game is not running', () => {
        let state = {
            ...defaultState,
            stage: STAGE_MAP.prepare,
        };
        let actual = reducer(state, actions.quess());

        expect(actual.quess).toEqual({
            position: false,
            letter: false,
        });

        state = {
            ...defaultState,
            stage: STAGE_MAP.finished,
        };
        actual = reducer(state, actions.quess());

        expect(actual.quess).toEqual({
            position: false,
            letter: false,
        });
    });

    it('should set target quess value equal to true', () => {
        const state = {
            ...defaultState,
            stage: STAGE_MAP.running,
        };
        const target = 'position';
        const actual = reducer(state, actions.quess(target));

        expect(actual.quess[target]).toBe(true);
    });

    it('should update step', () => {
        let actual;

        for (let i = 0; i < 5; i++) {
            actual = reducer(actual, actions.nextStep());

            expect(actual.step).toBe(i);
        }
    });

    it('should finish game', () => {
        const actual = reducer(undefined, actions.finish());

        expect(actual.stage).toBe(STAGE_MAP.finished);
    });
});
