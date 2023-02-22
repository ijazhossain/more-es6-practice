class teamMember {
    name;
    address = 'bd';
    designation = 'Support web dev';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class support extends teamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start a session');
    }
}
class neptuneDev extends teamMember {
    codeEditor;
    constructor(name, address, codeEditor) {
        super(name, address);
        this.codeEditor = codeEditor;
    }
    releaseApp(version) {
        console.log(`${this.name} release app version ${version}`);
    }
}
class studentCare extends teamMember {
    buildRoutine(student) {
        console.log(`${this.name} build a routine for ${student}`);
    }
}
const amir = new support('amir', 'bd', 11);
const alia = new studentCare('Alia', 'bd');
alia.buildRoutine('Imran');
console.log(amir);
console.log(alia);
const ash = new neptuneDev('ash', 'USA', 'android app');
ash.releaseApp('1.4.5');