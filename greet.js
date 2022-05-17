function greeting(list) {

    let theName = list || [];
    let regexo = /^[a-zA-Z]{3,}$/g;

    function setName(name) {
            if(!theName.includes(name)){
                theName.push(name);  
            }
    }
    function greetMassage(langu, name) {

        let newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().trim();
    
        if(newName === "" || !regexo.test(newName)){
            return "Enter a valid Name"
        }
        if(langu === ""){
            return "Language not checked"
        }
        if (theName.includes(newName)){
            setName(newName);
                return "Already greeted enter a new Name";
        } else {
            if (langu === "Isixhosa"){
                return "Molo, " + newName
            }
            else if (langu === "English"){
                return "Hello, " + newName;
            }
            else if (langu === "Pedi"){
                return "Dumela, " + newName;
            }
           
        }
    }
    function getMessage(){
        return greetMassage();
    }
    function counter() {
        return theName.length;
    }
    function getNames() {
        return theName;
    }
    function resetCount() {
        while(theName.length != 0){
            theName.pop();
        }
        return theName;
    }
    return {
        setName,
        greetMassage,
        counter,
        getNames,
        resetCount,
        getMessage
    }
}