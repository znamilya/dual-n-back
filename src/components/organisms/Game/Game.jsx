import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import bemCl from 'bem-cl';

// Components
import HotKey from 'components/atoms/HotKey/HotKey';
import AnswerResult from 'components/atoms/AnswerResult/AnswerResult';
import Board from 'components/molecules/Board/Board';
import Voice from 'components/molecules/Voice/Voice';
import Result from 'components/molecules/Result/Result';
// Actions
import * as screenActions from 'store/screen/actions';
import * as gameActions from 'store/game/actions';
// Selectors
import { getCurrentPosition, getCurrentLetter, getPositionQuess, getLetterQuess } from 'store/game/selectors';
import { STATE_MAP } from 'store/game/reducer';

import './Game.styl';


const b = bemCl('game');

@connect(
    (state) => ({
        n: state.n,
        state: state.game.state,
        step: state.game.step,
        totalSteps: state.game.totalSteps,
        position: getCurrentPosition(state),
        letter: getCurrentLetter(state),
        positionQuess: getPositionQuess(state),
        letterQuess: getLetterQuess(state),
    }),
    {
        prepare: gameActions.prepare,
        nextStep: gameActions.nextStep,
        quessPosition: gameActions.quess.bind(null, 'position'),
        quessLetter: gameActions.quess.bind(null, 'letter'),
        showMenu: screenActions.change.bind(null, 'menu'),
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
        this.props.prepare(this.props.n);
    }

    render() {
        if (this.props.state === STATE_MAP.prepare) {
            return (
                <div className={b()}>
                    <div className={b('board')}>
                        <Board
                            position={this.props.position}
                            step={this.props.step}
                        />
                    </div>
                </div>
            );
        }

        if (this.props.state === STATE_MAP.finished) {
            return (
                <Result
                    result={5}
                    total={this.props.totalSteps}
                    onOk={this.props.showMenu}
                />
            );
        }

        return (
            <div className={b()}>
                <div className={b('board')}>
                    <Board
                        position={this.props.position}
                        step={this.props.step}
                    />
                </div>
                <div className={b('voice')}>
                    <Voice
                        letter={this.props.letter}
                        step={this.props.step}
                    />
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
