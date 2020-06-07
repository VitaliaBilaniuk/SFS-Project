import React from 'react';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-number-input';
import AddImg from './assets/icon-add.svg'; 
import InputItem from './InputItem.jsx';
import CheckboxItem from './CheckboxItem.jsx';
import {setFormData, getFormData} from '../../js/actions';
import './PhoneForm.scss';
import '../../atomic/atomic.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        websiteVisibility: false,
        afterwordVisibility: false,
        skypeVisibility: true,
        addButtonVisibility: false,
        secondPhone: false,
        minNumberLength: 8
      };
    }

    handleInputChange = (e) => {
      const {name, value} = e.target;
      this.props.setFormData(name, value);
    }

    handleChangePhone = (value) => {
      this.props.setFormData('phone', value);
      if (value && value.length >= this.state.minNumberLength ) {
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

    handleInputToggle = (prop) => {
      this.setState({
        [prop]: !this.state[prop]
      });
    }

    handleAdditionalInput = (param, e) => {
      e.preventDefault();
      this.setState({
        secondPhone: param
      });
    }

    renderInputs = (inputProps) => {
      return (inputProps.map((inputProp) => {
        if (inputProp.visibility) {
          return (<InputItem
            key={inputProp.name} 
            title={inputProp.title} 
            type={inputProp.text} 
            name={inputProp.name} 
            placeholder={inputProp.placeholder}
            value={this.props.form[inputProp.name]}
            onChange={this.handleInputChange}
            values={this.state.values}
            errors={this.state.errors}
            />) 
        }
      }));
    }

    renderCheckboxes = () => {
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
          <label className="D(b) Pos(r) Mt(35) Mb(15) Fz(14) Fw(700) Lh(1)">
          { this.state.addButtonVisibility ? 
          <button onClick={(e) => this.handleAdditionalInput(true, e)} className="Bgc(t) Bd(n) Pos(a) End(0) B(-15) O(n) Cur(p)"><img src={AddImg}/></button>
          : null }
          Phone number</label>
          <PhoneInput
            className="Py(10) Bdbw(1) Bdbs(s) Bdbc(#111123)"
            placeholder="(201) 555-0123"
            value={ this.state.phone }
            onChange={ this.handleChangePhone } />
          { this.state.secondPhone ? 
            <div>
              <label className="D(b) Pos(r) Mt(35) Mb(15) Fz(14) Fw(700) Lh(1)">
                <button onClick={(e) => {this.handleAdditionalInput(false, e)}} className="Bgc(t) Bd(n) Pos(a) End(15) B(-15) O(n) Cur(p) Trfo(bottom) Rotate(45deg)"><img src={AddImg}/></button>
                Mobile
              </label>
              <PhoneInput
              className="Py(10) Bdbw(1) Bdbs(s) Bdbc(#111123)"
              placeholder="(201) 555-0123"
              value={ this.state.mobile }
              onChange={ value => this.props.setFormData('mobile', value) } />
            </div>
          : null } 
          <h2 className="Fz(20) Fw(400)">Customize Fields:</h2>
          {this.renderCheckboxes()} 
          {this.renderInputs(inputPropsBottom)} 
        </form>
      );
    }
  }
  const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, { setFormData, getFormData})(Form);
