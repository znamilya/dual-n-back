import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import StartButton from 'components/molecules/StartButton/StartButton';
import NCounter from 'components/molecules/NCounter/NCounter';

import './Menu.styl';


const b = bemCl('menu');

class Menu extends React.Component {

    static propTypes = {
    };

    render() {
        return (
            <div className={b()}>
                <StartButton
                    onClick={() => {
                        console.log('start game!');
                    }}
                />
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
