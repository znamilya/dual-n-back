import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import './Result.styl';


const b = bemCl('result');

class Result extends React.Component {

    static propTypes = {
        result: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div className={b()}>
                {this.props.result}/{this.props.total}
            </div>
        );
    }
}


export default Result;
