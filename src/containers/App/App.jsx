import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

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

                    </main>

                    <footer className={b('footer')}>
                    </footer>
                </div>
            </div>
        );
    }
}


export default App;
