import React from 'react';
import Global from '../params/Global.jsx';
import ProfileImg from '../side-pannel/assets/male-new.svg';

class Tab2 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        copied: false
      };
      this.propsGet = this.propsGet.bind(this);
    }

    propsGet() {
        const inputValues = Global.getAllValues();
        this.setState({...inputValues});
        const croppedImageUrl = Global.getImageSrc();
        this.setState({croppedImageUrl});
    }
    
    render() {
        console.log(this.state.croppedImageUrl);
        return (
        <div>
            <div>
            <img alt="sdsds" className="sfs-select__image" 
                style={{ maxWidth: '100%' }}                
                src= {this.state.croppedImageUrl ? this.state.croppedImageUrl : ProfileImg }       
            />  
                { this.state.name ? <p>{this.state.name}</p>
                : <p>Johny Doe </p> }  
                
            </div>
            <button onClick={this.propsGet}>Click to insert your values</button>
        </div>
        );
    }
}

export default Tab2;

