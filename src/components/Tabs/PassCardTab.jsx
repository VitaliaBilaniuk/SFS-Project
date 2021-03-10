import React from 'react';
import { connect } from 'react-redux';
import ProfileImg from '../SidePanel/assets/male-new.svg';
import { SfsTabContentWrapper } from './styles';

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
      <SfsTabContentWrapper>
        <div>
          <img
            alt="profile-photo"
            className="sfs-select__image"
            style={{ maxWidth: '100%' }}
            src={form.src ? form.src : ProfileImg}
          />
          {form.name ? <p>{form.name}</p> : <p>Johny Doe </p>}
        </div>
      </SfsTabContentWrapper>
    );
  }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(PassCardTab);
