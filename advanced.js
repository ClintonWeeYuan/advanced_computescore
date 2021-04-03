
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


function computeScore(mentor1, mentor2, score = 0){
    
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
        score += computeScore(mentor1.mentee, mentor2.mentee, 0);
    }

    return score;
}

module.export = computeScore;
