const abstract = require('./abstract');

class Professor extends abstract{
    constructor(name){
        super(name);
        this._mentee = null;
    }

    get mentee(){
        return this._mentee;
    }


    addMentee(mentee){
        if (mentee instanceof abstract){
            this._mentee = mentee;
        }

        else{
            return('No such mentee exists')
        }
    }
}

module.export = Professor;