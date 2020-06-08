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
        <div className="M(20)">
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
                <img src={PerfLogo} className="D(b) W(200)"/>
              </div> :
              <div>
                <img src={PerfLogo} className="D(b) W(200)"/>
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
          <label className="Pos(r) D(ib) W(50) H(20) Mt(20)">
            <input 
              type="checkbox"
              className="Op(0) W(0) H(0) Bgc(#2196F3)-c~span TranslateX(30)-c~span-b"
              onClick={this.handleToggleChange}
            />
            <span className="Pos(a) Pos(a)-b T(0) B(0) Start(0) End(0) Bgc(#cccccc) Trs(300ms) Trs(300ms)-b Cur(p) Bdrs(34) Bdrs(50p)-b Cnt()-b H(18)-b W(18)-b Start(1)-b B(1)-b Bgc(white)-b"></span>
          </label>
          <div>
            <button className="My(20)" onClick={this.copyToClipboard}>Copy to clipboard</button> 
            {this.state.copySuccess}
          </div>
        </div>
        );
    }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(Tab1);

