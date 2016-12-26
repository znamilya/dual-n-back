import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';
import { connect } from 'react-redux';

// Components
import StartButton from 'components/molecules/StartButton/StartButton';
import NCounter from 'components/molecules/NCounter/NCounter';
// Store
import * as screenActions from 'store/screen/actions';
import * as nActions from 'store/n/actions';

import './Menu.styl';


const b = bemCl('menu');

@connect(
    (state) => ({
        n: state.n,
    }),
    {
        startGame: screenActions.change.bind(null, 'game'),
        updateN: nActions.update,
    }
)
class Menu extends React.Component {

    static propTypes = {
        // Store
        n: PropTypes.number,
        startGame: PropTypes.func,
        updateN: PropTypes.func,
    };

    render() {
        return (
            <div className={b()}>
                <StartButton onClick={this.props.startGame} />
                <NCounter
                    value={this.props.n}
                    onChange={this.props.updateN}
                />
            </div>
        );
    }
}


export default Menu;
