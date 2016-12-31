import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import fSrc from './sounds/f.mp3';
import hSrc from './sounds/h.mp3';
import tSrc from './sounds/t.mp3';
import mSrc from './sounds/m.mp3';
import qSrc from './sounds/q.mp3';


const b = bemCl('voice');
const SOURCE_MAP = {
    f: fSrc,
    h: hSrc,
    t: tSrc,
    m: mSrc,
    q: qSrc,
}

class Voice extends React.PureComponent {

    static propsTypes = {
        letter: PropTypes.oneOf([Object.keys(SOURCE_MAP)]).isRequired,
    };


    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    componentDidUpdate(prevProps, prevState) {
        const audio = new Audio(SOURCE_MAP[this.props.letter]);

        audio.play();
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return <div></div>;
    }
}


export default Voice;
