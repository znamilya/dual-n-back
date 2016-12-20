import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import bemCl from 'bem-cl';

import './Board.styl';


const b = bemCl('board');

class Board extends React.Component {

    static propsTypes = {
        position: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.cellsStub = (new Array(9)).fill(1);
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    renderCells() {
        return this.cellsStub.map((cell, index) => (
            <li className={b('cell', {
                active: index === this.props.position
            })}
                key={index}
            />
        ));
    }

    render() {
        return (
            <div className={b()}>
                <ul className={b('cells')}>
                    {this.renderCells()}
                </ul>
            </div>
        );
    }
}


export default Board;
