export const createActionTypes = (namespace, typesToCreate) => {
    return typesToCreate.reduce((actionTypes, item) => {
        actionTypes[item] = `${namespace}/${item}`;

        return actionTypes;
    }, {});
};
