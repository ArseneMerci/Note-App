const fs = require('fs')
const chalk = require('chalk');

const getNotes = ()=>{
    return 'Your notes...'
}

const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title
    })
    if(duplicateNotes.length ===0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added!'))
    }else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    //we save data as json
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}
const removeNotes = (title)=>{
    const notes = loadNotes()
    newNotes = notes.filter(note => note.title !== title)
    if(newNotes.length !== notes.length){
        saveNotes(newNotes)
        console.log(chalk.green.inverse('note deleted succesfully!'))
    }else console.log(chalk.red.inverse('There is no note with such title!'))
}
module.exports = {
    getNotes,
    addNote,
    removeNotes
}