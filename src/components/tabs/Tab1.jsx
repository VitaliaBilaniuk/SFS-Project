import React from 'react';
import PerfLogo from './assets/logo-colored.svg';
import { connect } from 'react-redux';

class Tab1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        copied: false
      };
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
            <div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(Tab1);

