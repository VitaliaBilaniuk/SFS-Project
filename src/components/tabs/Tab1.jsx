import React from 'react';
import PerfLogo from './assets/logo-colored.svg';
import { connect } from 'react-redux';

class Tab1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = { copySuccess: '' }
    }
    
    copyToClipboard = (e) => {
      const selected = document.getElementById('signature');
      const selection = document.getSelection();
      const range = document.createRange();
      range.selectNode(selected);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy')
      selection.removeAllRanges();
      this.setState({ copySuccess: 'Copied!' });
    };

    
    handleToggleChange = () => {
      this.setState({
        showCompactVersion: !this.state.showCompactVersion
      });
    }

    render() {
        const { form } = this.props;
        return (
        <div>
          <div id="signature" className="sfs-area-copied">
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
          <div>
            <button onClick={this.copyToClipboard}>Copy to clipboard</button> 
            {this.state.copySuccess}
          </div>
        </div>
        );
    }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(Tab1);

