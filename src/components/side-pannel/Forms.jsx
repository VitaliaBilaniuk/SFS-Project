import React from 'react';
import PhoneInput from 'react-phone-number-input';
import './sidePannel.scss';
import './PhoneForm.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        position: '',
        email: '',
        skype: '',
        website: '',
        websiteVisibility: false,
        afterwordVisibility: false,
        skypeVisibility: true,
      };
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePosition = this.handleChangePosition.bind(this);
      this.handleChangeSkype = this.handleChangeSkype.bind(this);
      this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
      this.handleChangeAfterword = this.handleChangeAfterword.bind(this);
      this.handleWebsiteInputToggle = this.handleWebsiteInputToggle.bind(this);
      this.handleAfterwordInputToggle = this.handleAfterwordInputToggle.bind(this);
      this.handleSkypeInputToggle = this.handleSkypeInputToggle.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
      console.log('A name was submitted: ' + this.state.name);
    }

    handleChangePosition(event) {
      this.setState({position: event.target.value});
      console.log('Position was submitted: ' + this.state.position);
    }
  
    handleChangeEmail(event) {
      this.setState({email: event.target.value});
      console.log('Email was submitted: ' + this.state.email);
    }

    handleChangeSkype(event) {
      this.setState({skype: event.target.value});
      console.log('Skype was submitted: ' + this.state.skype);
    }

    handleChangeWebsite(event) {
      this.setState({website: event.target.value});
      console.log('Skype was submitted: ' + this.state.website);
    }

    handleChangeAfterword(event) {
      this.setState({afterword: event.target.value});
      console.log('Skype was submitted: ' + this.state.afterword);
    }

    handleWebsiteInputToggle() {
      this.setState({
        websiteVisibility: !this.state.websiteVisibility
      });
    }

    handleAfterwordInputToggle() {
      this.setState({
        afterwordVisibility: !this.state.afterwordVisibility
      });
    }

    handleSkypeInputToggle() {
      this.setState({
        skypeVisibility: !this.state.skypeVisibility
      });
    }

    render() {
      return (
        <form>
          <label className="sfs-label">
            Full Name
            <input type="text" className="sfs-input" placeholder="John Doe" value={this.state.name} onChange={this.handleChangeName} />
          </label>
          <label className="sfs-label">
            Position
            <input type="text" className="sfs-input" placeholder="ui engineer" value={this.state.position} onChange={this.handleChangePosition} />
          </label>
          <label className="sfs-label">
            Email
            <input type="email" className="sfs-input" placeholder="vitaliia.bilaniuk@perfectial.com" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          { this.state.skypeVisibility ? 
          <label className="sfs-label">
            Skype name
            <input type="text" className="sfs-input" placeholder="vitaliia.bilaniuk" value={this.state.skype} onChange={this.handleChangeSkype} />
          </label>
          : null }
          <label className="sfs-label">Phone number</label>
          <PhoneInput
            className="sfs-input"
            placeholder="(201) 555-0123"
            value={ this.state.phone }
            onChange={ phone => this.setState({ phone }) } />
          <h2 className="sfs-sidebar__subtitle">Customize Fields:</h2>
          <label className="sfs-checkbox-label">
            <input type="checkbox" defaultChecked={this.state.websiteVisibility} onChange={this.handleWebsiteInputToggle} className="sfs-checkbox-label__input" name="website" value="website"/> Customize company website
          </label>
          <label className="sfs-checkbox-label">
            <input type="checkbox" defaultChecked={this.state.afterwordVisibility} onChange={this.handleAfterwordInputToggle} className="sfs-checkbox-label__input" name="afterword" value="afterword"/> Customize afterword 
          </label>
          <label className="sfs-checkbox-label">
            <input type="checkbox" onChange={this.handleSkypeInputToggle} className="sfs-checkbox-label__input" name="skype" value="skype"/> Disable skype field
          </label>
          { this.state.websiteVisibility ? 
          <label className="sfs-label">
            Custom company website
            <input type="text" className="sfs-input" placeholder="perfectial.com" value={this.state.website} onChange={this.handleChangeWebsite} />
          </label>
          : null }
          { this.state.afterwordVisibility ? 
          <label className="sfs-label">
            Custom Afterword
            <input type="text" className="sfs-input" placeholder="Thanks" value={this.state.afterword} onChange={this.handleChangeAfterword} />
          </label>
          : null }
        </form>
      );
    }
  }
  
export default Form;