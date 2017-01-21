import { createActionTypes, makeActionCreator } from '../redux';


describe('createActionTypes', () => {
    const namespace = 'test';
    const syncActions = ['TOGGLE', 'SELECT'];

    it('should has the namespace', () => {
        const actionTypes = createActionTypes(namespace, syncActions);
        const actualNameSpace = actionTypes[syncActions[0]].slice(0, namespace.length);

        expect(actualNameSpace).toEqual(namespace);
    });

    it('should create sync actions', () => {
        const actionTypes = createActionTypes(namespace, syncActions);

        expect(actionTypes[syncActions[0]]).toEqual(`${namespace}/${syncActions[0]}`);
        expect(actionTypes[syncActions[1]]).toEqual(`${namespace}/${syncActions[1]}`);
    });
});

describe('makeActionCreator', () => {
    it('should create asction creator', () => {
        const actionType = 'updateN';
        const argName = 'nextValue';
        const argValue = 4;

        const actualActionCreator = makeActionCreator(actionType, argName);
        const action = actualActionCreator(argValue);

        expect(action.type).toEqual(actionType);
        expect(action[argName]).toEqual(argValue);
    });
});
