import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import bemCl from 'bem-cl';

// Components
import Board from 'components/molecules/Board/Board';
import Voice from 'components/molecules/Voice/Voice';
import HotKey from 'components/atoms/HotKey/HotKey';
import AnswerResult from 'components/atoms/AnswerResult/AnswerResult';
// Actions
import * as gameActions from 'store/game/actions';
// Selectors
import { getCurrentPosition, getCurrentLetter, getPositionQuess, getLetterQuess } from 'store/game/selectors';

import './Game.styl';


const b = bemCl('game');

@connect(
    (state) => ({
        n: state.n,
        isFinished: state.game.isFinished,
        step: state.game.step,
        position: getCurrentPosition(state),
        letter: getCurrentLetter(state),
        positionQuess: getPositionQuess(state),
        letterQuess: getLetterQuess(state),
    }),
    {
        start: gameActions.start,
        nextStep: gameActions.nextStep,
        quessPosition: gameActions.quess.bind(null, 'position'),
        quessLetter: gameActions.quess.bind(null, 'letter'),
    }
)
class Game extends React.Component {

    static propTypes = {
        // Store
        step: PropTypes.number,
        position: PropTypes.number,
        letter: PropTypes.string,
        checkPosition: PropTypes.func,
        checkLetter: PropTypes.func,
    };

    componentWillMount() {
        this.props.start(this.props.n);
    }

    render() {
        if (this.props.isFinished) {
            return 'Finish!';
        }

        return (
            <div className={b()}>
                <div className={b('board')}>
                    <Board position={this.props.position} />
                </div>
                <div className={b('voice')}>
                    <Voice letter={this.props.letter} />
                </div>
                <div>
                    <button onClick={this.props.nextStep}>next step</button>
                </div>
                <div className={b('controls')}>
                    <span className={b('control')}>
                        <HotKey
                            value="f"
                            desc="Position match"
                            onFire={this.props.quessPosition}
                        />
                        <AnswerResult
                            has={this.props.positionQuess.has}
                            correct={this.props.positionQuess.correct}
                        />
                    </span>
                    <span className={b('control')}>
                        <HotKey
                            value="j"
                            desc="Sound match"
                            onFire={this.props.quessLetter}
                        />
                        <AnswerResult
                            has={this.props.letterQuess.has}
                            correct={this.props.letterQuess.correct}
                        />
                    </span>
                </div>
            </div>
        );
    }
}


export default Game;
