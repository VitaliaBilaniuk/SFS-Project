import React from 'react';
import Global from '../params/Global.jsx'
class Tab1 extends React.Component {

    constructor(props) {
      super(props);
      this.propsGet = this.propsGet.bind(this);
    }

    propsGet() {
        const NameValue = Global.getNameValue();
        this.setState({NameValue});
    }

    
    render() {
        return (
        <div>
            Thanks,
            { this.state ? <p>{this.state.NameValue}</p>
            : <p>Johny Doe </p> }  
         <button onClick={this.propsGet}>Click to insert your values</button>
        </div>
        );
    }
}

export default Tab1;

