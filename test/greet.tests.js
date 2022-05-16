
describe('Greet Factory function', function(){
    describe("", function(){
        it('It should be able to set the name and push to an array', function(){
            const myName = greeting();
            myName.setName("Zeze");
            assert.deepEqual(["Zeze"], myName.getNames());
        });
        it('It should return enter name if empty string is passed', function(){
            const myName = greeting();
            assert.equal("Enter a valid Name", myName.greetMassage("Isixhosa",""));
        });
        it('It should return language not checked if greeted without a language', function(){
            const myName = greeting();
            assert.equal("Language not checked", myName.greetMassage("","Zeze"));
        });
    })

describe("It should be able to greet in defferent languages", function(){
    it('It should return a greeting in the selected language with the name', function(){
        const myName = greeting();
        assert.equal("Hello, Liya", myName.greetMassage("English","liya"));
    });
    it('It should return a greeting in the selected language with the name', function(){
        const myName = greeting();
        assert.equal("Hello, Liya", myName.greetMassage("English","liya"));
    });
    it('It should return a greeting in the selected language with the name', function(){
        const myName = greeting();
        assert.equal("Dumela, Liyema", myName.greetMassage("Pedi","liyema"));    
    });
});
describe("Set and reset counter", function(){
    it('It should return the counter each time a valid name is greeted', function(){
        const myName = greeting();
        myName.setName("Zeze");
        myName.setName("liya");
        myName.setName("zimi");
        assert.equal(3, myName.counter());    
    });
    it('It should be able to reset counter', function(){
        const myName = greeting();
        myName.setName("Zeze");
        myName.setName("liya");
        myName.setName("zimi");
        assert.equal(0, myName.resetCount());    
    });
});
});