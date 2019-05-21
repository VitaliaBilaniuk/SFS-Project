import React from 'react';
import Global from '../params/Global.jsx';
import PerfLogo from './assets/logo-colored.svg';

class Tab1 extends React.Component {

    constructor(props) {
      super(props);
      this.propsGet = this.propsGet.bind(this);
      this.state = { copySuccess: '' };
      this.copyArea = React.createRef();
    }

    propsGet() {
        const NameValue = Global.getNameValue();
        this.setState({NameValue});
    }

    copyToClipboard = (e) => {
        let copyArea = this.copyArea.current;
        copyArea.select();
        document.execCommand('copy');
        this.setState({ copySuccess: 'Copied!' });
    };
    
    render() {
        return (
        <div>
            <div className="sfs-area-copied" ref={this.copyArea}>
                Thanks,
                { this.state ? <p>{this.state.NameValue}</p>
                : <p>Johny Doe </p> }  
                { this.state ? <p>{this.state.PositionValue}</p>
                : <p>UI Engineer </p> }  
                <img src={PerfLogo} className="sfs-full-logo"/>
            </div>
            <button onClick={this.propsGet}>Click to insert your values</button>
            <button onClick={this.copyToClipboard}>Copy</button> 
            {this.state.copySuccess}
        </div>
        );
    }
}

export default Tab1;

