import React from 'react';
import { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';

class ImageCrop extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        crop: {
          aspect: 1,
          width: 50,
          x: 0,
          y: 0,
        },
      };
    }
    
    onImageLoaded = (image, pixelCrop) => {
      this.imageRef = image;
    };
  
    onCropComplete = (crop, pixelCrop) => {
      this.makeClientCrop(crop, pixelCrop);
    };
  
    onCropChange = crop => {
      this.setState({ crop });
    };
      
    getCroppedImg(image, pixelCrop, fileName) {
      const canvas = document.createElement('canvas');
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;
      const ctx = canvas.getContext('2d');
  
      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height,
      );
  
      return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
          if (!blob) {
            //reject(new Error('Canvas is empty'));
            console.error('Canvas is empty');
            return;
          }
          blob.name = fileName;
          window.URL.revokeObjectURL(this.fileUrl);
          this.fileUrl = window.URL.createObjectURL(blob);
          resolve(this.fileUrl);
        }, 'image/jpeg');
      });
    }
    
    async makeClientCrop(crop, pixelCrop) {
      if (this.imageRef && crop.width && crop.height) {
        const croppedImageUrl = await this.getCroppedImg(
          this.imageRef,
          pixelCrop,
          'newFile.jpeg',
        );
        this.setState({ croppedImageUrl });
      }
    }

    render() {
      const { crop } = this.state;
      const src = this.props.src;
      const getCroppedUrl = this.state.croppedImageUrl;
      this.props.getPropsFromChild(getCroppedUrl);        
      return (
        <div>  
          <div className="sfs-overlay"></div>
          <div className="sfs-crop"> 
            <h3>Crop photo</h3>
            {src && (
              <ReactCrop
                src={src}
                crop={crop}
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              />
            )}
            <button onClick={this.props.handleCropSave} >Crop photo</button>
          </div>       
        </div>
      );
    }
  }
    
  export default ImageCrop;