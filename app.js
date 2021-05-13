const yargs = require('yargs');
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    //creating command
    command:'add',
    describe:'add new note',
    //specifying it's attributes
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'remove new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=>{
        notes.removeNotes(argv.title);
    }
});
//create list command
yargs.command({
    command:'list',
    describe:'list all note',
    handler:()=>{
        console.log('listing all notes!');
    }
});
//create read command
yargs.command({
    command:'read',
    describe:'read notes',
    handler:()=>{
        console.log('reading notes!');
    }
});
yargs.parse()