class abstract {
    constructor(name){
        this._name = name;
        this._background = {
        };
    }
    
    get name(){
        return this._name;
    }
    
    get background(){
        return this._background
    }

}

module.export = abstract;