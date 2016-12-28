import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import './AnswerResult.styl';


const b = bemCl('answer-result');

class AnswerResult extends React.Component {

    static propTypes = {
        has: PropTypes.bool,
        correct: PropTypes.bool,
    };


    /* ------------------------------------------------------------------------------------------ */
    /* METHODS                                                                                    */
    /* ------------------------------------------------------------------------------------------ */
    resolveText(isCorrect) {
        if (isCorrect) {
            return 'Correct!';
        }

        return 'Wrong';
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        if (!this.props.has) {
            return null;
        }

        return (
            <div className={b({
                correct: this.props.correct,
                wrong: !this.props.correct,
            })}>
                {this.resolveText(this.props.correct)}
            </div>
        );
    }
}


export default AnswerResult;
