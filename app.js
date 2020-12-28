const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// customizing the version of yargs
yargs.version('7.7.7')

// command: add new note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        author:{
            describe: 'auther name',
            demandOption: false,
            type: 'string'
        },
        body:{
            describe: 'Main body of Note',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.author,argv.body)
    }
})

// command: remove a note
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title:{
            describe: 'Note title which you wanna delete',
            demandOption: true,
            type: 'string'
        },
        author:{
            describe: 'author whose notes you wanna delete',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

// command: list
yargs.command({
    command: 'list',
    describe: 'show notes list',
    handler(){
        notes.listNotes()
    }
})

//command: read
yargs.command({
    command: 'read',
    describe: 'Reading the note',
    handler(){
        console.log('Reading the note')
    }
})

debugger

yargs.parse()
// console.log(process.argv)
// console.log(yargs.argv)
