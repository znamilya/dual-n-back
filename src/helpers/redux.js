export const createActionTypes = (namespace, typesToCreate) => {
    return typesToCreate.reduce((actionTypes, item) => {
        actionTypes[item] = `${namespace}/${item}`;

        return actionTypes;
    }, {});
};

export const makeActionCreator = (type, ...argNames) => {
    return function(...args) {
        let action = { type }

        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })

        return action;
    }
}
