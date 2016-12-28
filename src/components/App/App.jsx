import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import bemCl from 'bem-cl';

import Menu from 'components/organisms/Menu/Menu';
import Game from 'components/organisms/Game/Game';

import './App.styl';


const b = bemCl('app');
const MAIN_ELEM_MAP = {
    game: <Game />,
    menu: <Menu />,
}

@connect(
    (state) => ({
        screen: state.screen,
    }),
)
class App extends React.Component {

    render() {
        return (
            <div className={b()}>
                <div className={b('container')}>
                    <header className={b('header')}>
                        <h1 className={b('title')}>Dual N Back</h1>
                    </header>
                    <main className={b('main')}>
                        {MAIN_ELEM_MAP[this.props.screen]}
                    </main>
                </div>
            </div>
        );
    }
}



export default App;
