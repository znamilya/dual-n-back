import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import './Result.styl';


const b = bemCl('result');

class Result extends React.PureComponent {

    static propTypes = {
        positions: PropTypes.number.isRequired,
        letters: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        onOk: PropTypes.func,
    };


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div className={b()} onClick={this.props.onOk}>
                <div className={b('wrapper')}>
                    <div>
                        Positions: {this.props.positions}/{this.props.total}
                    </div>
                    <div>
                        Letters: {this.props.letters}/{this.props.total}
                    </div>
                </div>
            </div>
        );
    }
}


export default Result;
