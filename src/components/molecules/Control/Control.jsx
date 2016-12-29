import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import HotKey from 'components/atoms/HotKey/HotKey';
import AnswerResult from 'components/atoms/AnswerResult/AnswerResult';


const b = bemCl('control');

class Control extends React.Component {

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div className={b()}>
                <HotKey {...this.props} />
                <AnswerResult {...this.props} />
            </div>
        );
    }
}


export default Control;
