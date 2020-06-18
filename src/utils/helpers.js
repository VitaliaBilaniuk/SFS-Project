const helpers = {
  inputs: {
    name: '',
    position: '',
    skype: '',
    website: '',
  },
  imageSrc: '',
  setValue: function (key, value) {
    this.inputs[key] = value;
  },
  setImageSrc: function (src) {
    this.imageSrc = src;
  },
  getImageSrc: function () {
    return this.imageSrc;
  },
  getAllValues: function () {
    return { ...this.inputs };
  },
};

export default helpers;
