import React from 'react';
import PerfLogo from './assets/logo-colored.svg';
import { connect } from 'react-redux';

class Tab3 extends React.Component {

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
            <div className="sfs-printed-card">
                { form.name ? <p>{form.name}</p>
                : <p>Johny Doe </p> }
                { form.position ? <p>{form.position}</p>
                : <p>Position</p> }
                { form.email ? <p>{form.email}</p>
                : <p>yourmail@perfectial.com</p> }
                { form.phone ? <p>{form.phone}</p>
                : <p>+38 (093) 123 45 47</p> }
                { form.mobile ? <p>{form.mobile}</p>
                :<p></p> }
                <p>skype: { form.skype ? <span>{form.skype}</span>
                : <span>skypename</span> } </p>
                <img src={PerfLogo} className="sfs-full-logo"/>
            </div>
            <div className="sfs-printed-card">
              <img src={PerfLogo} className="sfs-full-logo"/>
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(Tab3);

