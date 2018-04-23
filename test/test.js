'use strict';

var expect = require('chai').expect;

var EventEmitter= require('../index');


describe('#Emiteur', function() {
    it('should emit an some_event', function(){
        var eventFired = false
        const ee= new EventEmitter();
   
        ee.on('register',function(){
          eventFired = true
        });

        ee.trigger('register');
        expect(eventFired).to.equal(true);
    });

    it('should modify some value', function(){
        var eventFired = false
        var result="test ";
        const ee= new EventEmitter();
   
        ee.on('register',function(arg1){
          eventFired = true
          result=result+arg1;
        });

        ee.trigger('register','success');
        expect(eventFired).to.equal(true);
        expect(result).to.equal("test success");
    });

    it('should modify some value with many arguments', function(){
        var eventFired = false
        var result="test ";
        var result2="test ";
        const ee= new EventEmitter();
   
        ee.on('register',function(arg1){
          eventFired = true
          result=result+arg1;
        });

        ee.on('register',function(arg1,arg2){
           
            result2=arg1+" "+arg2;
          });

        ee.trigger('register','success','super');
        expect(eventFired).to.equal(true);
        expect(result).to.equal("test success");
        expect(result2).to.equal("success super");
        console.log(result);
        console.log(result2);
        console.log(eventFired);
    });
   

});