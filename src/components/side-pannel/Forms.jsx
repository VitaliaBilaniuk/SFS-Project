import React from 'react';
import './sidePannel.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        position: '',
        email: '',
        skype: ''
      };
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePosition = this.handleChangePosition.bind(this);
      this.handleChangeSkype = this.handleChangeSkype.bind(this);
    }
  
    handleChangeName(event) {
      this.setState({name: event.target.value});
      console.log('A name was submitted: ' + this.state.name);
    }

    handleChangePosition(event) {
      this.setState({name: event.target.value});
      console.log('Position was submitted: ' + this.state.position);
    }
  
    handleChangeEmail(event) {
      this.setState({email: event.target.value});
      console.log('Email was submitted: ' + this.state.email);
    }

    handleChangeSkype(event) {
      this.setState({email: event.target.value});
      console.log('Skype was submitted: ' + this.state.skype);
    }

    render() {
      return (
        <form>
          <label className="sfs-label">
            Full Name
            <input type="text" placeholder="John Doe" value={this.state.name} onChange={this.handleChangeName} />
          </label>
          <label className="sfs-label">
            Position
            <input type="text" placeholder="ui engineer" value={this.state.position} onChange={this.handleChangePosition} />
          </label>
          <label className="sfs-label">
            Email
            <input type="email" placeholder="vitaliia.bilaniuk@perfectial.com" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <label className="sfs-label">
            Skype name
            <input type="text" placeholder="vitaliia.bilaniuk" value={this.state.skype} onChange={this.handleChangeSkype} />
          </label>
        </form>
      );
    }
  }
  
export default Form;