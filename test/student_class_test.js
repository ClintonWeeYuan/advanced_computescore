const assert = require('chai').assert;
let student = require('../student_class')
let abstract = require('../abstract')

describe('Student Class', function(){
    it('Student class should be created', function(){
        let jonathan = new student('Jonathan')
        assert.equal(jonathan.name, 'Jonathan');
    })
})
