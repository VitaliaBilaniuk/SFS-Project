import React from 'react';
import PerfLogo from './assets/logo-colored.svg';
import { connect } from 'react-redux';

class Tab1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        copied: false,
        showCompactVersion: true
      };
    }
    
    handleToggleChange = () => {
      this.setState({
        showCompactVersion: !this.state.showCompactVersion
      });
    }

    render() {
        const { form } = this.props;
        return (
        <div>
          
          <div className="sfs-area-copied">
            Thanks
            { form.name ? <p>{form.name}</p>
            : <p>Johny Doe </p> }  
            { form.position ? <p>{form.position}</p>
            : <p>UI Engineer </p> } 
            {
              this.state.showCompactVersion?
              <div>
                <p>skype: { form.skype ? <span>{form.skype}</span>
                : <span>vitaliia.bilaniuk </span> } </p>
                <p>web: {form.website ? <span>{form.website}</span>
                : <span>perfectial.com</span> } </p>
                <img src={PerfLogo} className="sfs-full-logo"/>
              </div> :
              <div>
                <img src={PerfLogo} className="sfs-full-logo"/>
                <p>w: {form.website ? <span>{form.website}</span>
                : <span>perfectial.com</span> } </p>
                <p>s: { form.skype ? <span>{form.skype}</span>
                : <span>vitaliia.bilaniuk </span> } </p>
              </div>
            }  
          </div>
          
          <div>
            Signature style: {this.state.showCompactVersion? 'full': 'compact'}
          </div>
          <label className="switch">
            <input 
              type="checkbox"
              onClick={this.handleToggleChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
        );
    }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(Tab1);

