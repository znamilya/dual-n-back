import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import './NCounter.styl';


const b = bemCl('n-counter');

class NCounter extends React.PureComponent {

    static propTypes = {
        value: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.handleMinusClick = this.handleMinusClick.bind(this);
        this.handlePlusClick = this.handlePlusClick.bind(this);
    }

    handleMinusClick() {
        this.props.onChange(this.props.value - 1);
    }

    handlePlusClick() {
        this.props.onChange(this.props.value + 1);
    }

    render() {
        return (
            <div className={b()}>
                <span className={b('control')} onClick={this.handleMinusClick}>-</span>
                <span className={b('value')}>{this.props.value}</span>
                <span className={b('control')} onClick={this.handlePlusClick}>+</span>
            </div>
        );
    }
}


export default NCounter;
