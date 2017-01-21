import { fitInRange } from '../math';


describe('fitInRange', () => {
    it('fit 1 in [0, 2]', () => {
        expect(fitInRange(1, 0, 2)).toBe(1);
    });

    it('fit 2 [0, 2]', () => {
        expect(fitInRange(2, 0, 2)).toBe(2);
    });

    it('fit 0 [0, 2]', () => {
        expect(fitInRange(0, 0, 2)).toBe(0);
    });

    it('fit 3 [0, 2]', () => {
        expect(fitInRange(3, 0, 2)).toBe(2);
    });

    it('fit -10 [0, 2]', () => {
        expect(fitInRange(-10, 0, 2)).toBe(0);
    });
});
