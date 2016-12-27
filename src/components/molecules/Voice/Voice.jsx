import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import lSrc from './sounds/l.mp3';
import hSrc from './sounds/h.mp3';
import tSrc from './sounds/t.mp3';
import mSrc from './sounds/m.mp3';
import kSrc from './sounds/k.mp3';


const b = bemCl('voice');
const SOURCE_MAP = {
    l: lSrc,
    h: hSrc,
    t: tSrc,
    m: mSrc,
    k: kSrc,
}

class Voice extends React.PureComponent {

    static propsTypes = {
        letter: PropTypes.oneOf([Object.keys(SOURCE_MAP)]).isRequired,
    };


    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    componentDidUpdate(prevProps, prevState) {
        this.audio = new Audio(SOURCE_MAP[this.props.letter]);
        this.audio.play();
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return null;
    }
}


export default Voice;
