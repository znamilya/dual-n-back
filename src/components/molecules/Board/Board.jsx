import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import bemCl from 'bem-cl';

import './Board.styl';


const b = bemCl('board');

class Board extends React.Component {

    static propsTypes = {
        activeIndex: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.cellsStub = (new Array(9)).fill(1);
    }

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    renderCells() {
        return this.cellsStub.map((cell, index) => {
            const itemElem = <li className={b('cell')} key={index} />;

            if (this.props.activeIndex === index) {
                return (
                    <ReactCSSTransitionGroup
                        transitionName="cell"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}
                        key={index}
                    >
                        <li className={b('cell')} />
                    </ReactCSSTransitionGroup>
                );
            }

            return itemElem;
        });
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
