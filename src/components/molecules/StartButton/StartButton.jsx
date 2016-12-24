import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';


class StartButton extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        return (
            <button onClick={this.props.onClick}>Start!</button>
        );
    }
}


export default StartButton;
