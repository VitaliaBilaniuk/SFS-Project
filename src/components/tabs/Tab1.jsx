import React from 'react';
import Global from '../params/Global.jsx';
import PerfLogo from './assets/logo-colored.svg';
import CopyToClipboard from 'react-copy-html-to-clipboard';
import { connect } from 'react-redux';

class Tab1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        copied: false
      };
      this.propsGet = this.propsGet.bind(this);
    }

    propsGet() {
        const inputValues = Global.getAllValues();
        this.setState({...inputValues});
    }
    
    render() {
        const { form } = this.props;
        return (
        <div>
            <div className="sfs-area-copied">
                { form.name ? <p>{form.name}</p>
                : <p>Johny Doe </p> }  
                { form.position ? <p>{form.position}</p>
                : <p>UI Engineer </p> } 
                <p>skype: { form.skype ? <span>{form.skype}</span>
                : <span>vitaliia.bilaniuk </span> } </p>
                <p>website: {form.website ? <span>{form.website}</span>
                : <span>perfectial.com</span> } </p>
                <img src={PerfLogo} className="sfs-full-logo"/>
            </div>
            <button onClick={this.propsGet}>Click to insert your values</button>
            <div>
            <CopyToClipboard text={<img src={PerfLogo} className="sfs-full-logo"/>}
                onCopy={() => this.setState({copied: true})}>
                <button>Copy to clipboard with button</button>
            </CopyToClipboard>
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(Tab1);

