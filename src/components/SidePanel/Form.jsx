import React from 'react';
import { connect } from 'react-redux';

import { setFormData, getFormData } from '../../actions';

import InputItem from './InputItem.jsx';
import CheckboxItem from './CheckboxItem.jsx';
import validate from '../../utils/validationRules';

import AddImg from './assets/icon-add.svg';

import { SfsFormAdditionalHeading, SfsFormLabel, SfsFormMobileButton, SfsFormPhoneButton, SfsFormPhoneInput } from './styles';

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
      minNumberLength: 8,
      values: {},
      errors: {},
      isSubmitting: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.props.setFormData(name, value);
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
      errors: validate(this.state.values),
    });
  };

  handleChangePhone = (value) => {
    this.props.setFormData('phone', value);
    if (value && value.length >= this.state.minNumberLength) {
      this.setState({
        addButtonVisibility: true,
      });
    } else {
      this.setState({
        addButtonVisibility: false,
      });
    }
  };

  handleInputToggle = (prop) => {
    this.setState({
      [prop]: !this.state[prop],
    });
  };

  handleAdditionalInput = (param, e) => {
    e.preventDefault();
    this.setState({
      secondPhone: param,
    });
  };

  renderInputs = (inputProps) => {
    return inputProps.map((inputProp) => {
      if (inputProp.visibility) {
        return (
          <InputItem
            key={inputProp.name}
            title={inputProp.title}
            type={inputProp.text}
            name={inputProp.name}
            placeholder={inputProp.placeholder}
            value={this.props.form[inputProp.name]}
            onChange={this.handleInputChange}
            values={this.state.values}
            errors={this.state.errors}
          />
        );
      }
    });
  };

  renderCheckboxes = () => {
    const checkboxProps = [
      {
        visibilityProps: 'websiteVisibility',
        name: 'website',
        value: 'website',
        label: 'Customize company website',
      },
      {
        visibilityProps: 'afterwordVisibility',
        name: 'afterword',
        value: 'afterword',
        label: 'Customize afterword',
      },
      {
        visibilityProps: 'skypeVisibility',
        name: 'skype',
        value: 'skype',
        label: 'Disable skype field',
      },
    ];

    return checkboxProps.map((checkboxProp) => {
      return (
        <CheckboxItem
          key={checkboxProp.name}
          visibilityProps={checkboxProp.visibilityProps}
          propsOnChange={this.handleInputToggle}
          name={checkboxProp.name}
          value={checkboxProp.value}
          label={checkboxProp.label}
        />
      );
    });
  };
  render() {
    const inputPropsTop = [
      {
        title: 'Full Name',
        type: 'text',
        name: 'name',
        placeholder: 'John Doe',
        visibility: true
      },
      {
        title: 'Position',
        type: 'text',
        name: 'position',
        placeholder: 'ui engineer',
        visibility: true,
      },
      {
        title: 'Email address',
        type: 'email',
        name: 'email',
        placeholder: 'vitaliia.bilaniuk@perfectial.com',
        visibility: true,
      },
      {
        title: 'Skype',
        type: 'text',
        name: 'skype',
        placeholder: 'vitaliia.bilaniuk',
        visibility: this.state.skypeVisibility,
      },
    ];
    const inputPropsBottom = [
      {
        title: 'Custom company website',
        type: 'text',
        name: 'website',
        placeholder: 'perfectial.com',
        visibility: this.state.websiteVisibility,
      },
      {
        title: 'Custom Afterword',
        type: 'text',
        name: 'afterword',
        placeholder: 'Thanks',
        visibility: this.state.afterwordVisibility,
      },
    ];

    return (
      <form>
        {this.renderInputs(inputPropsTop)}
        <SfsFormLabel>
          {this.state.addButtonVisibility ? (
            <SfsFormPhoneButton onClick={(e) => this.handleAdditionalInput(true, e)}>
              <img src={AddImg} />
            </SfsFormPhoneButton>
          ) : null}
          Phone number
        </SfsFormLabel>
        <SfsFormPhoneInput
          placeholder="(201) 555-0123"
          value={this.state.phone}
          onChange={this.handleChangePhone}
        />
        {this.state.secondPhone ? (
          <div>
            <SfsFormLabel>
              <SfsFormMobileButton onClick={(e) => {this.handleAdditionalInput(false, e);}}>
                <img src={AddImg} />
              </SfsFormMobileButton>
              Mobile
            </SfsFormLabel>
            <SfsFormPhoneInput
              placeholder="(201) 555-0123"
              value={this.state.mobile}
              onChange={(value) => this.props.setFormData('mobile', value)}
            />
          </div>
        ) : null}

        <SfsFormAdditionalHeading>Customize Fields:</SfsFormAdditionalHeading>
        {this.renderCheckboxes()}
        {this.renderInputs(inputPropsBottom)}
      </form>
    );
  }
}
const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, { setFormData, getFormData })(Form);
