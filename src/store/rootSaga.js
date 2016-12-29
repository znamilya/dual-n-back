import game from './game/saga';


export default function* rootSaga() {
    return yield [
        game(),
    ];
}
