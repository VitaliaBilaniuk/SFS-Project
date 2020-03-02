import React from 'react';
import { connect } from 'react-redux';
import ProfileImg from '../side-pannel/assets/male-new.svg';

class Tab2 extends React.Component {

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
            <div>
            <img alt="profile-photo" className="sfs-select__image" 
                style={{ maxWidth: '100%' }}                
                src= {form.src ? form.src : ProfileImg }       
            />  
                { form.name ? <p>{form.name}</p>
                : <p>Johny Doe </p> }  
                
            </div>
        </div>
        );
    }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(Tab2);

