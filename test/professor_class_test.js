const assert = require('chai').assert;
const professor = require('../professor_class')
const abstract = require('../abstract')
const student = require('../student_class')


describe('Professor Class', function(){
     it('Professor class should be created', function(){
        let jonathan = new professor('Jonathan');
        assert.equal(jonathan.name, 'Jonathan');
    })

    it('Professor class should have a mentee of null value', function(){
        let jonathan = new professor('Jonathan')
        assert.equal(jonathan.mentee, null);
    })
})

describe('Add Mentee Function', function(){
    it('Add Mentee should give Professor Jonathan a mentee student called Clinton', function(){
        let jonathan = new professor('Jonathan');
        let clinton = new student('Clinton')
        jonathan.addMentee(clinton);
        assert.equal(jonathan.mentee, clinton)
        })

    it('Add Mentee should give Professor Jonathan a mentee associate professor called Clinton', function(){
        let jonathan = new professor('Jonathan');
        let clinton = new professor('Clinton')
        jonathan.addMentee(clinton);
        assert.equal(jonathan.mentee, clinton)
        })

    it('When adding mentee that does not exist, should return "mentee does not exist"', function(){
        let jonathan = new professor('Jonathan');
        let clinton = 'clinton';
        assert.equal(jonathan.addMentee(clinton), 'No such mentee exists')
        })
    })
