import React from 'react';
import Global from '../params/Global.jsx';
import PerfLogo from './assets/logo-colored.svg';

class Tab1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.propsGet = this.propsGet.bind(this);
    }

    propsGet() {
        const inputValues = Global.getAllValues();
        this.setState({...inputValues});
    }
    
    render() {
        return (
        <div>
            <div className="sfs-area-copied">
                Thanks,
                { this.state.name ? <p>{this.state.name}</p>
                : <p>Johny Doe </p> }  
                { this.state.position ? <p>{this.state.position}</p>
                : <p>UI Engineer </p> } 
                <p>skype: { this.state.skype ? <span>{this.state.skype}</span>
                : <span>vitaliia.bilaniuk </span> } </p>
                <p>website: { this.state.website ? <span>{this.state.website}</span>
                : <span>perfectial.com</span> } </p>
                <img src={PerfLogo} className="sfs-full-logo"/>
            </div>
            <button onClick={this.propsGet}>Click to insert your values</button>
        </div>
        );
    }
}

export default Tab1;

