import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import './Result.styl';


const b = bemCl('result');

class Result extends React.PureComponent {

    static propTypes = {
        result: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        onOk: PropTypes.func,
    };

    render() {
        return (
            <div className={b()} onClick={this.props.onOk}>
                {this.props.result}/{this.props.total}
            </div>
        );
    }
}


export default Result;
