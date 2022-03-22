const program = require('commander');
const createPasswords = require('./utils/createPasswords');
const savePasswords = require('./utils/savePasswords');
const log = console.log;
const passwords = [];

// using commander to generate from command line
program.version('1.0.0').description('Secure Random Password Generator');
program
.option('-l --length <number>', 'minimum length of password')
.option('-ns --symbols <number>', 'number of symbols')
.option('-n --numbers <number>', 'number of numbers')
.option('-np --total <number>', 'number of passwords')
.option('-s --save', 'save passwords to passwords.txt')
.parse();

const {length, symbols, numbers, total, save} = program.opts();

// get passwords
for (let i = 0; i < total; i++){
    let gen = createPasswords(length, symbols, numbers, total)
    passwords.push(gen);
    if(save) {
        savePasswords(gen);
    }
}

//output
log(passwords);
log(`passwords saved in passwords.txt: ${passwords.length}`);
