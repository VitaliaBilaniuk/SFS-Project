import React from 'react';
import PhoneInput from 'react-phone-number-input';
import AddImg from './assets/icon-add.svg'; 
import './sidePannel.scss';
import './PhoneForm.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        websiteVisibility: false,
        afterwordVisibility: false,
        skypeVisibility: true,
        addButtonVisibility: false,
        secondPhone: false,
      };
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleWebsiteInputToggle = this.handleWebsiteInputToggle.bind(this);
      this.handleAfterwordInputToggle = this.handleAfterwordInputToggle.bind(this);
      this.handleSkypeInputToggle = this.handleSkypeInputToggle.bind(this);
      this.handleInputAdd = this.handleInputAdd.bind(this);
      this.handleInputRemove = this.handleInputRemove.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(e) {
      this.setState({[e.name]: e.target.value});
      console.log('A name was submitted: '+ e.target.value);
    }

    handleChangePhone(value) {
      if (value.length >= 8 ) {
        this.setState({
          addButtonVisibility: true
        });
      }
      else {
        this.setState({
          addButtonVisibility: false
        });
      }
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

    handleInputAdd(e) {
      e.preventDefault();
      this.setState({
        secondPhone: true
      });
    }

    handleInputRemove(e) {
      e.preventDefault();
      this.setState({
        secondPhone: false
      });
    }

    render() {
      return (
        <form>     
          <label className="sfs-label">
            Full Namethis.state.name
            <input type="text" className="sfs-input" name="name" placeholder="John Doe" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <label className="sfs-label">
            Position
            <input type="text" className="sfs-input" name="position" placeholder="ui engineer" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          <label className="sfs-label">
            Email
            <input type="email" name="email" className="sfs-input" placeholder="vitaliia.bilaniuk@perfectial.com" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          { this.state.skypeVisibility ? 
          <label className="sfs-label">
            Skype name
            <input type="text" name="skype" className="sfs-input" placeholder="vitaliia.bilaniuk" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          : null }
          <label className="sfs-label sfs-label__add">
          { this.state.addButtonVisibility ? 
          <button onClick={this.handleInputAdd} className="sfs-button__add"><img src={AddImg}/></button>
          : null }
          Phone number</label>
          <PhoneInput
            className="sfs-input"
            placeholder="(201) 555-0123"
            value={ this.state.phone }
            onChange={  this.handleChangePhone} />
          { this.state.secondPhone ? 
            <div>
              <label className="sfs-label sfs-label__add">
                <button onClick={this.handleInputRemove} className="sfs-button__add sfs-button__remove"><img src={AddImg}/></button>
                Mobile
              </label>
              <PhoneInput
              className="sfs-input"
              placeholder="(201) 555-0123"
              value={ this.state.mobile }
              onChange={ mobile => this.setState({ mobile }) } />
            </div>
          : null } 
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
            <input type="text" name="website" className="sfs-input" placeholder="perfectial.com" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          : null }
          { this.state.afterwordVisibility ? 
          <label className="sfs-label">
            Custom Afterword
            <input type="text" name="afterword" className="sfs-input" placeholder="Thanks" value={this.state.value} onChange={this.handleInputChange} />
          </label>
          : null }
        </form>
      );
    }
  }
  
export default Form;