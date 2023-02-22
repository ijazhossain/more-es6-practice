class Instructor {
    name;
    designation = 'web course Instructor';
    team = 'web team';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSupportSession(time) {
        console.log(`Starting a support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Creating a quiz of module ${module}`);
    }
}
const amir = new Instructor('amir', 'Mumbai');
console.log(amir);
amir.startSupportSession('11pm');
amir.createQuiz('ES6 basics');
