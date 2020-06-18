import React from 'react';
import { connect } from 'react-redux';
import ProfileImg from '../SidePanel/assets/male-new.svg';

class PassCardTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  render() {
    const { form } = this.props;
    return (
      <div className="M(20)">
        <div>
          <img
            alt="profile-photo"
            className="sfs-select__image"
            style={{ maxWidth: '100%' }}
            src={form.src ? form.src : ProfileImg}
          />
          {form.name ? <p>{form.name}</p> : <p>Johny Doe </p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(PassCardTab);
