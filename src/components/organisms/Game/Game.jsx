import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import bemCl from 'bem-cl';

// Components
import Board from 'components/molecules/Board/Board';
import Control from 'components/molecules/Control/Control';
import Voice from 'components/molecules/Voice/Voice';
import Result from 'components/molecules/Result/Result';
// Actions
import * as screenActions from 'store/screen/actions';
import * as gameActions from 'store/game/actions';
// Selectors
import * as selectors from 'store/game/selectors';
import { STAGE_MAP } from 'store/game/constants';

import './Game.styl';


const b = bemCl('game');

@connect(
    (state) => ({
        n: state.game.n,
        stage: state.game.stage,
        step: state.game.step,
        score: state.game.score,
        isQuessDisabled: selectors.isQuessDisabled(state.game),
        totalSteps: state.game.totalSteps,
        position: selectors.getCurrentPosition(state.game),
        letter: selectors.getCurrentLetter(state.game),
        positionQuess: selectors.getPositionQuess(state.game),
        letterQuess: selectors.getLetterQuess(state.game),
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

    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                      */
    /* ------------------------------------------------------------------------------------------ */
    componentWillMount() {
        this.props.prepare();
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        if (this.props.stage === STAGE_MAP.finished) {
            return (
                <Result
                    positions={this.props.score.positions}
                    letters={this.props.score.letters}
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
                    <Control
                        value="f"
                        desc="Position match"
                        has={this.props.positionQuess.has}
                        correct={this.props.positionQuess.correct}
                        disabled={this.props.isQuessDisabled}
                        onFire={this.props.quessPosition}
                    />
                    <Control
                        value="j"
                        desc="Sound match"
                        has={this.props.letterQuess.has}
                        correct={this.props.letterQuess.correct}
                        disabled={this.props.isQuessDisabled}
                        onFire={this.props.quessLetter}
                    />
                </div>
            </div>
        );
    }
}


export default Game;
