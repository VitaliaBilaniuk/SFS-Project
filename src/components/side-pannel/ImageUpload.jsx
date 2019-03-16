import React from 'react';
import './sidePannel.scss';


class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}; 
      this.onImageChange = this.onImageChange.bind(this);
    }
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
            image: URL.createObjectURL(event.target.files[0])
            });
        }
    }
   
    render() {
      return (
          <div>
              <input type="file" onChange={this.onImageChange} className="filetype" id="group_image"/>
              <img id="target" src={this.state.image}/>
          </div>
      );
    }
  }
  
export default ImageUpload;