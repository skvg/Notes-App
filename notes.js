const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'skvg'
}

const addNote = (title,author, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            author: author,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('Note is added'))
    }
    else{
        console.log(chalk.red.inverse('Your Note is already exist'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const findNotes = notes.filter((note) => note.title !== title)
    if(notes.length === findNotes.length){
        console.log(chalk.yellow.inverse('Note with this title does not exist !!'))
    }
    else{
        saveNotes(findNotes)
        console.log(chalk.red.inverse('Note deleted successfully!!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length === 0){
        console.log(chalk.inverse.blue('Your Notes list is empty !!'))
    }
    else{
        console.log(chalk.blue.inverse('Your Notes list is...'))
        notes.forEach((note) => {
            console.log(chalk.bold.yellow(note.title))
        })
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes
}