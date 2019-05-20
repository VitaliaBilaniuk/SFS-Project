class Global  {
    constructor(NameValue) {
        this.NameValue = NameValue;
    }
    static setNameValue(NameValue) {
        this.NameValue = NameValue;
    }
    static getNameValue() {
        return this.NameValue;
    }
}

export default Global;
