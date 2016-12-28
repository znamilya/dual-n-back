import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';
import { connect } from 'react-redux';

// Components
import StartButton from 'components/molecules/StartButton/StartButton';
import NCounter from 'components/molecules/NCounter/NCounter';
// Store
import * as gameActions from 'store/game/actions';
import * as screenActions from 'store/screen/actions';

import './Menu.styl';


const b = bemCl('menu');

@connect(
    (state) => ({
        n: state.game.n,
    }),
    {
        startGame: screenActions.change.bind(null, 'game'),
        updateGameN: gameActions.updateN,
    }
)
class Menu extends React.Component {

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div className={b()}>
                <StartButton onClick={this.props.startGame} />
                <NCounter
                    value={this.props.n}
                    onChange={this.props.updateGameN}
                />
            </div>
        );
    }
}


export default Menu;
