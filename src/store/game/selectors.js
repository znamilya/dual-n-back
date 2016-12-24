export const getCurrentPosition = (state) => {
    return state.positions[state.step];
}

export const getCurrentLetter = (state) => {
    return state.letters[state.step];
}
