import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import StartButton from 'components/molecules/StartButton/StartButton';
import NCounter from 'components/molecules/NCounter/NCounter';

import './Menu.styl';


const b = bemCl('menu');

class Menu extends React.Component {

    static propTypes = {
        onStart: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className={b()}>
                <StartButton
                    onClick={this.props.onStart}
                />
                <NCounter
                    value={4}
                    onChange={(value) => {
                        console.log(value);
                    }}
                />
            </div>
        );
    }
}


export default Menu;
