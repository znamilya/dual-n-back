const getQuess = (target, from, state) => {
    const step = state.game.step;
    const all = state.game[from];
    const current = all[step];
    const n = state.n;

    return {
        has: state.game.quess[target],
        correct: current === all[step - n],
    };
}

export const getCurrentPosition = (state) => {
    return state.game.positions[state.game.step];
}

export const getCurrentLetter = (state) => {
    return state.game.letters[state.game.step];
}

export const getPositionQuess = getQuess.bind(null, 'position', 'positions');

export const getLetterQuess = getQuess.bind(null, 'letter', 'letters');
