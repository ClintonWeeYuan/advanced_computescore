const assert = require('chai').assert;
let matchmake = require('../advanced')

describe('Matchmaker', function(){
    describe('Professor Class', function(){
        it('Professor class should be created', function(){
            let jonathan = new matchmake.Professor('Jonathan');
            assert.equal(jonathan.name, 'Jonathan');
        })

        it('Professor class should have a mentee of null value', function(){
            let jonathan = new matchmake.Professor('Jonathan')
            assert.equal(jonathan.mentee, null);
        })
    })

    describe('Student Class', function(){
        it('Student class should be created', function(){
            let jonathan = new matchmake.Student('Jonathan')
            assert.equal(jonathan.name, 'Jonathan');
        })
    })

    describe('Add Mentee Function', function(){
        it('Add Mentee should give Professor Jonathan a mentee student called Clinton', function(){
            let jonathan = new matchmake.Professor('Jonathan');
            let clinton = new matchmake.Student('Clinton')
            jonathan.addMentee(clinton);
            assert.equal(jonathan.mentee, clinton)
        })

        it('Add Mentee should give Professor Jonathan a mentee associate professor called Clinton', function(){
            let jonathan = new matchmake.Professor('Jonathan');
            let clinton = new matchmake.Professor('Clinton')
            jonathan.addMentee(clinton);
            assert.equal(jonathan.mentee, clinton)
        })

        it('When adding mentee that does not exist, should return "mentee does not exist"', function(){
            let jonathan = new matchmake.Professor('Jonathan');
            let clinton = 'clinton';
            assert.equal(jonathan.addMentee(clinton), 'No such mentee exists')
        })
    })

    describe('Compute Score', function(){
        context('candiates with one depth', function(){
            let jonathan = new matchmake.Professor('Jonathan');
            jonathan.background.postgradUni = 'Cambridge'
            let clinton = new matchmake.Professor('Clinton');
            clinton.background.postgradUni = 'Cambridge';

            it('should compute score between two professors', function(){
                assert.equal(matchmake.computeScore(jonathan, clinton), 10);
            })
        })

        context('candidates with two depth', function(){
            let jonathan = new matchmake.Professor('Jonathan');
            jonathan.background.postgradUni = 'Cambridge';
            let clinton = new matchmake.Professor('Clinton');
            clinton.background.postgradUni = 'Cambridge';
            let jou = new matchmake.Student('Jou');
            jou.background.postgradField = 'Law';
            let ken = new matchmake.Student('Ken');
            ken.background.postgradField = 'Law';
            jonathan.addMentee(jou);
            clinton.addMentee(ken);
            
            it('Should compute scores between Professors, and then between students, and add them together', function(){
                assert.equal(matchmake.computeScore(jonathan, clinton), 40);
            })
        })

        context('candidates with three depth', function(){
            let jonathan = new matchmake.Professor('Jonathan');
            jonathan.background.postgradUni = 'Cambridge';
            let clinton = new matchmake.Professor('Clinton');
            clinton.background.postgradUni = 'Cambridge';
            let jou = new matchmake.Professor('Jou');
            jou.background.postgradField = 'Law';
            let ken = new matchmake.Professor('Ken');
            ken.background.postgradField = 'Law';
            jonathan.addMentee(jou);
            clinton.addMentee(ken);
            let obama = new matchmake.Student('Obama');
            obama.background.undergradUni = 'Columbia';
            let trump = new matchmake.Student('Trump');
            trump.background.undergradUni = 'Columbia';
            jou.addMentee(obama);
            ken.addMentee(trump);

            
            it('Should compute scores between Professors, associate Professors, and then between students, and add them together', function(){
                assert.equal(matchmake.computeScore(jonathan, clinton), 43);
            })
        })
    })

})