import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import bemCl from 'bem-cl';

import './Board.styl';


const b = bemCl('board');

class Board extends React.PureComponent {

    static propsTypes = {
        position: PropTypes.number,
        step: PropTypes.number,
    };

    constructor(props) {
        super(props);

        this.cellsStub = this.createCells();
    }


    /* ------------------------------------------------------------------------------------------ */
    /* METHODS                                                                                    */
    /* ------------------------------------------------------------------------------------------ */
    createCells() {
        return (new Array(9))
            .fill(1)
            .map((cell, index) => {
                return {
                    id: `cell-${index}`,
                };
            });
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    renderCells() {
        return this.cellsStub.map((cell, index) => (
            <li className={b('cell', {
                active: index === this.props.position
            })}
                key={cell.id + this.props.step}
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
