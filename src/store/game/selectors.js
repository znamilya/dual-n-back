const getQuess = (target, from, game) => {
    const step = game.step;
    const all = game[from];
    const current = all[step];

    return {
        has: game.quess[target],
        correct: current === all[step - game.n],
    };
}

export const getCurrentPosition = (game) => {
    return game.positions[game.step];
}

export const getCurrentLetter = (game) => {
    return game.letters[game.step];
}

export const getPositionQuess = getQuess.bind(null, 'position', 'positions');

export const getLetterQuess = getQuess.bind(null, 'letter', 'letters');

export const isQuessDisabled = (game) => {
    return game.step < game.n;
}
