export const random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

export const fitInRange = (value, min, max) => {
    return Math.max(Math.min(value, max), min);
}
