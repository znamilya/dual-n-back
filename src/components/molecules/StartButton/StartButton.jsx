import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import './StartButton.styl';


const b = bemCl('start-button');

class StartButton extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        return (
            <span className={b()}
                onClick={this.props.onClick}
            >
                Start!
            </span>
        );
    }
}


export default StartButton;
