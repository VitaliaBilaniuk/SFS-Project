const Global = {
    inputs: {
        name: '',
        position:'',
        skype: '',
        website: ''
    },
    setValue: function(key, value){
     this.inputs[key]= value;
    },
    getAllValues: function() {
        return {...this.inputs};
    }
}

export default Global;
