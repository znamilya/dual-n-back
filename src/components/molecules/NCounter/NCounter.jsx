import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';


const b = bemCl('n-counter');

class NCounter extends React.Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className={b()}>
                <input type="number" min="1" max="9" />
            </div>
        );
    }
}


export default NCounter;
