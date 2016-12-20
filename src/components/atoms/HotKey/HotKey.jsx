import React, { PropTypes } from 'react';
import bemCl from 'bem-cl';


import './HotKey.styl';


const b = bemCl('hot-key');

class HotKey extends React.Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        onFire: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.handleDocumentKeyPress = this.handleDocumentKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleDocumentKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleDocumentKeyPress);
    }

    handleDocumentKeyPress(e) {
        if (e.key === this.props.value) {
            this.props.onFire();
        }
    }

    render() {
        return (
            <div className={b()}>
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
