const getQuess = (target, gameTarget, state) => {
    const step = state.game.step;
    const all = state.game[gameTarget];
    const current = all[step];
    const n = state.n;

    return {
        has: state.quess[target],
        correct: current === all[step - n],
    };
}

export const getPositionQuess = getQuess.bind(null, 'position', 'positions');
export const getLetterQuess = getQuess.bind(null, 'letter', 'letters');
