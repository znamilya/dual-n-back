import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import Board from 'components/molecules/Board/Board';
import Voice from 'components/molecules/Voice/Voice';
import HotKey from 'components/atoms/HotKey/HotKey';
import AnswerResult from 'components/atoms/AnswerResult/AnswerResult';

import './Game.styl';


const b = bemCl('game');

class Game extends React.Component {

    static propTypes = {
        step: PropTypes.number.isRequired,
        position: PropTypes.number.isRequired,
        letter: PropTypes.string.isRequired,
        checkShape: PropTypes.func,
        checkLetter: PropTypes.func,
    };

    render() {
        return (
            <div className={b()}>
                <div className={b('board')}>
                    <Board position={this.props.position} />
                </div>
                <div className={b('voice')}>
                    <Voice letter={this.props.letter} />
                </div>
                <div className={b('controls')}>
                    <span className={b('control')}>
                        <HotKey
                            value="f"
                            desc="Position match"
                            onFire={() => {
                                console.log('F clicked')
                            }}
                        />
                        <AnswerResult correct />
                    </span>
                    <span className={b('control')}>
                        <HotKey
                            value="j"
                            desc="Sound match"
                            onFire={() => {
                                console.log('J clicked')
                            }}
                        />
                        <AnswerResult correct={false} />
                    </span>
                </div>
            </div>
        );
    }
}


export default Game;
