import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import Menu from 'components/organisms/Menu/Menu';
import Game from 'components/organisms/Game/Game';

import './App.styl';


const b = bemCl('app');

class App extends React.Component {

    render() {
        return (
            <div className={b()}>
                <div className={b('container')}>
                    <header className={b('header')}>
                        <h1 className={b('title')}>Dual N Back</h1>
                    </header>
                    <main className={b('main')}>
                        <Menu />
                        {/* <Game
                            step={1}
                            position={5}
                            letter="L"
                        /> */}
                    </main>

                    <footer className={b('footer')}>
                    </footer>
                </div>
            </div>
        );
    }
}


export default App;
