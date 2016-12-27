import game from 'store/game/saga';


export default function* rootSaga() {
    return yield [
        game(),
    ];
}
