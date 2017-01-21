import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';

import './HotKey.styl';


const b = bemCl('hot-key');

class HotKey extends React.Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        onFire: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.handleDocumentKeyPress = this.handleDocumentKeyPress.bind(this);
    }


    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                      */
    /* ------------------------------------------------------------------------------------------ */
    componentWillReceiveProps(nextProps) {
        if (this.props.disabled && !nextProps.disabled) {
            document.addEventListener('keypress', this.handleDocumentKeyPress);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleDocumentKeyPress);
    }


    /* ------------------------------------------------------------------------------------------ */
    /* HANDLERS                                                                                   */
    /* ------------------------------------------------------------------------------------------ */
    handleDocumentKeyPress(e) {
        if (e.key === this.props.value) {
            this.props.onFire();
        }
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div className={b({
                disabled: this.props.disabled,
            })}>
                <div className={b('desc')}>
                    {this.props.desc}
                </div>
                <div className={b('value')}>
                    {this.props.value}
                </div>
            </div>
        );
    }
}


export default HotKey;
