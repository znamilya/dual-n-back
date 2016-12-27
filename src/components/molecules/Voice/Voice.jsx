import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import Lsrc from './sounds/l.mp3';


const b = bemCl('voice');

class Voice extends React.PureComponent {

    static propsTypes = {
        // letterSrc: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        this.audio = new Audio(Lsrc);
        this.audio.play();
    }

    componentDidUpdate(prevProps, prevState) {
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
