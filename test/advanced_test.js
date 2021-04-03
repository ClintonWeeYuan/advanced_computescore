const assert = require('chai').assert;
const matchmake = require('../advanced');
const student = require('../student_class');
const professor = require('../professor_class');
const abstract = require('../abstract').default;

describe('Compute Score', function(){
    context('candiates with one depth', function(){
        let jonathan = new professor('Jonathan');
        jonathan.background.postgradUni = 'Cambridge'
        let clinton = new professor('Clinton');
        clinton.background.postgradUni = 'Cambridge';

        it('should compute score between two professors', function(){
            assert.equal(matchmake.computeScore(jonathan, clinton, 0), 10);
        })
    })

    context('candidates with two depth', function(){
        let jonathan = new professor('Jonathan');
        jonathan.background.postgradUni = 'Cambridge';
        let clinton = new professor('Clinton');
        clinton.background.postgradUni = 'Cambridge';
        let jou = new student('Jou');
        jou.background.postgradField = 'Law';
        let ken = new student('Ken');
        ken.background.postgradField = 'Law';
        jonathan.addMentee(jou);
        clinton.addMentee(ken);
            
        it('Should compute scores between Professors, and then between students, and add them together', function(){
            assert.equal(matchmake.computeScore(jonathan, clinton, 0), 40);
        })
    })

    context('candidates with three depth', function(){
        let jonathan = new professor('Jonathan');
        jonathan.background.postgradUni = 'Cambridge';
        let clinton = new professor('Clinton');
        clinton.background.postgradUni = 'Cambridge';
        let jou = new professor('Jou');
        jou.background.postgradField = 'Law';
        let ken = new professor('Ken');
        ken.background.postgradField = 'Law';
        jonathan.addMentee(jou);
        clinton.addMentee(ken);
        let obama = new student('Obama');
        obama.background.undergradUni = 'Columbia';
        let trump = new student('Trump');
        trump.background.undergradUni = 'Columbia';
        jou.addMentee(obama);
        ken.addMentee(trump);
            
        it('Should compute scores between Professors, associate Professors, and then between students, and add them together', function(){
            assert.equal(matchmake.computeScore(jonathan, clinton, 0), 43);
           })
    })
})
