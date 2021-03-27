class Human {
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

class Student extends Human{
    constructor(name){
        super(name);
    }

}

class Professor extends Human{
    constructor(name){
        super(name);
        this._mentee = null
    }

    get mentee(){
        return this._mentee;
    }


    addMentee(mentee){
        if (mentee instanceof Human){
            this._mentee = mentee;
        }

        else{
            return('No such mentee exists')
        }
    }
}

const criteria = {
    postgradUni				:10,
    postgradField			:30,
    postgradType			:20,
    postgradProgramTitle	:50,
    postgradUniPrev			:10,
    postgradFieldPrev		:30,
    postgradTypePrev		:20,
    postgradProgramTitlePrev:50,
    undergradCountry		:2,
    undergradField			:5,
    undergradUni			:3,
    undergradProgramTitle	:10
};

let score = 0;

function computeScore(mentor1, mentor2){
 
    const mentor1_keys = Object.keys(mentor1.background);

    for (let key of mentor1_keys){
        if (mentor1.background[key] === mentor2.background[key]){
            score += criteria[key];
    
            if (mentor1.background[key] === mentor2.background[key + 'Prev']){
                score += criteria[key + 'Prev'];
            }
            
            else if (mentor1.background[key.slice(0, -4)] === mentor2.background[key]){
                score += criteria[key]
            }   

        }
    
        else if (mentor1.background[key] === mentor2.background[key + 'Prev']){
                score += criteria[key + 'Prev'];
        }
    
        else {
            continue;
        }
    }
    
    if (mentor1.mentee instanceof Human){
        computeScore(mentor1.mentee, mentor2.mentee)
    }

    return score;
}



module.exports.Human = Human;
module.exports.Professor = Professor;
module.exports.Student = Student;
module.exports.computeScore = computeScore;
