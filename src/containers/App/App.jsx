import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import bemCl from 'bem-cl';

import Menu from 'components/organisms/Menu/Menu';
import Game from 'components/organisms/Game/Game';

import './App.styl';


const b = bemCl('app');

@connect(
    (state) => ({
        screen: state.screen,
    }),
)
class App extends React.Component {

    renderMain() {
        switch (this.props.screen) {
            case 'game': {
                return <Game />;
            }

            case 'menu':
            default: {
                return <Menu />;
            }
        }
    }

    render() {
        return (
            <div className={b()}>
                <div className={b('container')}>
                    <header className={b('header')}>
                        <h1 className={b('title')}>Dual N Back</h1>
                    </header>
                    <main className={b('main')}>
                        {this.renderMain()}
                    </main>

                    <footer className={b('footer')}>
                    </footer>
                </div>
            </div>
        );
    }
}


export default App;
