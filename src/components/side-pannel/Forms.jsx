import React from 'react';
import PhoneInput from 'react-phone-number-input';
import AddImg from './assets/icon-add.svg'; 
import InputItem from './InputItem.jsx'
import CheckboxItem from './CheckboxItem.jsx'
import './sidePannel.scss';
import './PhoneForm.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        position: '',
        skype: '',
        website: '',
        afterword: '',
        websiteVisibility: false,
        afterwordVisibility: false,
        skypeVisibility: true,
        addButtonVisibility: false,
        secondPhone: false,
      };
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleInputToggle = this.handleInputToggle.bind(this);
      this.handleAdditionalInput = this.handleAdditionalInput.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.renderInputs = this.renderInputs.bind(this);
      this.renderCheckboxes = this.renderCheckboxes.bind(this);
    }
  
    handleInputChange(e) {
      this.setState({[e.target.name]: e.target.value});
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

    handleInputToggle(prop) {
      this.setState({
        [prop]: !this.state[prop]
      });
    }

    handleAdditionalInput(param, e) {
      e.preventDefault();
      this.setState({
        secondPhone: param
      });
    }

    renderInputs (inputProps) {
      return (inputProps.map((inputProp) => {
        if (inputProp.visibility) {
          return (<InputItem
            key={inputProp.name} 
            title={inputProp.title} 
            type={inputProp.text} 
            name={inputProp.name} 
            placeholder={inputProp.placeholder}
            value={this.state.value}
            onChange={this.handleInputChange}/>) 
        }
      }));
    }

    renderCheckboxes () {
      const checkboxProps = [
        {visibilityProps: 'websiteVisibility', name: 'website', value: 'website', label: 'Customize company website'},
        {visibilityProps: 'afterwordVisibility', name: 'afterword', value: 'afterword', label: 'Customize afterword'},
        {visibilityProps: 'skypeVisibility', name: 'skype', value: 'skype', label: 'Disable skype field'}
      ];

      return (checkboxProps.map((checkboxProp) => {
          return (<CheckboxItem
            key={checkboxProp.name} 
            visibilityProps={checkboxProp.visibilityProps}
            propsOnChange={this.handleInputToggle}
            name={checkboxProp.name} 
            value={checkboxProp.value}
            label={checkboxProp.label}/>) 
      }));
    }
    render() {
      const inputPropsTop = [
        {title: 'Full Name', type: 'text', name: "name", placeholder: "John Doe", visibility: true},
        {title: 'Position', type: 'text', name: "position", placeholder: "ui engineer", visibility: true},
        {title: 'Email', type: 'email', name: "email", placeholder: "vitaliia.bilaniuk@perfectial.com", visibility: true},
        {title: 'Skype name', type: 'text', name: "skype", placeholder: "vitaliia.bilaniuk", visibility: this.state.skypeVisibility}];
      const inputPropsBottom = [
        {title: 'Custom company website', type: 'text', name: "website", placeholder: "perfectial.com", visibility: this.state.websiteVisibility},
        {title: 'Custom Afterword', type: 'text', name: "afterword", placeholder: "Thanks", visibility: this.state.afterwordVisibility}]; 
      return (
        <form>
          {this.renderInputs(inputPropsTop)} 
          <label className="sfs-label sfs-label__add">
          { this.state.addButtonVisibility ? 
          <button onClick={(e) => this.handleAdditionalInput(true, e)} className="sfs-button__add"><img src={AddImg}/></button>
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
                <button onClick={(e) => {this.handleAdditionalInput(false, e)}} className="sfs-button__add sfs-button__remove"><img src={AddImg}/></button>
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
          {this.renderCheckboxes()} 
          {this.renderInputs(inputPropsBottom)} 
        </form>
      );
    }
  }
  
export default Form;