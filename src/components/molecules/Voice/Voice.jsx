import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import Lsrc from './sounds/L.mp3';


const b = bemCl('voice');

class Voice extends React.Component {

    static propsTypes = {
        // letterSrc: PropTypes.string.isRequired,
    };


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <audio className={b}
                src={Lsrc}
                autoPlay
            />
        );
    }
}


export default Voice;
