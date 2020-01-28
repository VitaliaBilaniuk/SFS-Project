import React from 'react';
import { PureComponent } from 'react';
import ImageCrop from './ImageCrop.jsx';
import ProfileImg from './assets/male-new.svg';
import './ImageUpload.scss';
import {setFormData, getFormData} from '../../js/actions';
import { connect } from 'react-redux';

class ImageUpload extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      src: null,
      showElements: false,
    };
    this.fileField = React.createRef();
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result }),
      );     
      reader.readAsDataURL(e.target.files[0]);
    }
    this.setState({ showElements: true });
  };

  handleImitateClick = () => {
    let inputField = this.fileField.current;
    inputField.click();
  }

  getPropsFromChild = (croppedImageUrl) => {
    this.setState({ croppedImageUrl });
    this.props.setFormData('src', croppedImageUrl);
  }

  handleCropSave = () => {
    this.setState({ showElements: false });
  }
  
  render() {
    const { croppedImageUrl } = this.state;
    return (
      <div>
        <div className="sfs-select">
        <input ref={this.fileField} type="file" onChange={this.onSelectFile} />        
        <img alt="sdsds" className="sfs-select__image" 
          style={{ maxWidth: '100%' }} 
          onClick={this.handleImitateClick}               
          src= { croppedImageUrl ? croppedImageUrl : ProfileImg }       
        />    
        </div>
        { this.state.showElements ? 
        <ImageCrop src={this.state.src} 
        getPropsFromChild={this.getPropsFromChild}
        handleCropSave={this.handleCropSave}/>
        : null }  
      </div>
    );
  }
}
  
const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, { setFormData, getFormData})(ImageUpload);