import reducer, {
    defaultState, updateScore, createPositionsSequence,
    createLetterSequence, createSequenceWithMatches
} from '../reducer';
import { AVAILABLE_LETTERS, STAGE_MAP } from '../constants';
import * as actions from '../actions';


describe('reducer game', () => {
    it('default state', () => {
        const state = reducer(undefined, {});

        expect(state).toBe(defaultState);
    });

    describe('helper functions', () => {
        describe('updateScore', () => {
            it('should not change score if quess is correct', () => {
                expect(updateScore(10, true)).toBe(10);
            });

            it('should decrise score if quess is incorrect', () => {
                expect(updateScore(10, false)).toBe(9);
            });
        });

        describe('createPositionsSequence', () => {
            it('should create sequence of passed length', () => {
                expect(createPositionsSequence(25)).toHaveLength(25);
            });

            it('should contains only numbers from 0 to 8', () => {
                const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

                expect(createPositionsSequence(25)).toEqual(expect.arrayContaining(numArray));
            });
        });

        describe('createLetterSequence', () => {
            it('should create sequence of passed length', () => {
                expect(createLetterSequence(25)).toHaveLength(25);
            });

            it('should contains only availlable letters', () => {
                expect(createLetterSequence(25)).toEqual(expect.arrayContaining(AVAILABLE_LETTERS));
            });
        });

        describe('createSequenceWithMatches', () => {
            it('should create sequence of passed length', () => {
                const len = 25;
                const positionSequence = createPositionsSequence(len);
                const letterSequence = createLetterSequence(len);

                expect(createSequenceWithMatches(positionSequence, 2)).toHaveLength(len);
                expect(createSequenceWithMatches(letterSequence, 2)).toHaveLength(len);
            });

            it.skip('should contains at least n matches', () => {
                for (let attempts = 0; attempts < 10; attempts++) {
                    for (let n = 1; n <= 5; n++) {
                        const positionSequence = createPositionsSequence(25);
                        const sequence = createSequenceWithMatches(positionSequence, n);
                        const matches = sequence.reduce((result, position, index) => {
                            if (index < n) {
                                return result;
                            }

                            if (sequence[index] === sequence[index - n]) {
                                result++;
                            }

                            return result;
                        }, 0);

                        expect(matches).toBeGreaterThanOrEqual(n);
                    }
                }
            });
        });
    });

    describe('actions', () => {
        it('updateN', () => {
            const state = reducer(undefined, actions.updateN(3));

            expect(state).toMatchObject({
                n: 3
            });
        });

        // it('updateN', () => {
        //     const state = reducer(undefined, actions.prepare());

        // });
    });
});
