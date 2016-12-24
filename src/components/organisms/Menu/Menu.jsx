import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';
import { connect } from 'react-redux';

// Components
import StartButton from 'components/molecules/StartButton/StartButton';
import NCounter from 'components/molecules/NCounter/NCounter';
// Store
import * as screenActions from 'store/screen/actions';

import './Menu.styl';


const b = bemCl('menu');

@connect(
    (state) => ({
    }),
    {
        startGame: screenActions.change.bind(null, 'game'),
    }
)
class Menu extends React.Component {

    static propTypes = {
        // Store
        startGame: PropTypes.func,
    };

    render() {
        return (
            <div className={b()}>
                <StartButton onClick={this.props.startGame} />
                <NCounter
                    onChange={() => {
                        console.log('n change');
                    }}
                />
            </div>
        );
    }
}


export default Menu;
