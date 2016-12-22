import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import Menu from 'components/organisms/Menu/Menu';
import Game from 'components/organisms/Game/Game';

import './App.styl';


const b = bemCl('app');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            screen: 'menu'
        }
    }

    render() {
        let screenElem;

        if (this.state.screen === 'menu') {
            screenElem = <Menu onStart={() => {
                this.setState({
                    screen: 'game',
                });
            }} />;
        } else {
            screenElem = <Game step={1} position={5} letter="L"/>
        }

        return (
            <div className={b()}>
                <div className={b('container')}>
                    <header className={b('header')}>
                        <h1 className={b('title')}>Dual N Back</h1>
                    </header>
                    <main className={b('main')}>
                        {screenElem}
                    </main>

                    <footer className={b('footer')}>
                    </footer>
                </div>
            </div>
        );
    }
}


export default App;
