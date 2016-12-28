export const random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

export const shuffle = (a) => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }

  return a;
}

export const fitInRange = (value, min, max) => {
    return Math.max(Math.min(value, max), min);
}
