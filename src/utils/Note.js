import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'

export default class Note {
  id
  text
  done
  date

  constructor(text) {
    const date = new Date()
    this.text = text
    this.id = this.generateId()
    this.done = false
    this.date = format(date, 'yyyy-MM-dd HH:mm:ss')
  }

  generateId() {
    return uuidv4()
  }

  saveNote() {
    const paramsToCheck = ['id', 'text', 'date']
    const allIncluded = paramsToCheck.every(element => this.hasOwnProperty(element))

    if (allIncluded) {
      const notes = Note.getNotes()
      notes.push(this)
      localStorage.setItem('notes', JSON.stringify(notes))
      return true
    } else {
      console.log('Error: Invalid parameters')
      return false
    }
  }

  static getNote(noteId) {
    const notes = JSON.parse(localStorage.getItem('notes')) || []
    const note = notes.filter(note => note.id == noteId)
    return note ? note : []
  }

  static getNotes() {
    const notes = localStorage.getItem('notes')
    if (notes) {
      const parsedNotes = JSON.parse(notes)
      parsedNotes.sort((a, b) => new Date(b.date) - new Date(a.date))
      return parsedNotes
    } else {
      return []
    }
  }
  

  static deleteNote(noteId) {
    const notes = JSON.parse(localStorage.getItem('notes')) || []
    const updatedNotes = notes.filter(note => note.id !== noteId)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  static editNote(noteId, text) {
    const notes = this.getNotes()
    const noteIndex = notes.findIndex(note => note.id === noteId)
    notes[noteIndex].text = text
    notes[noteIndex].date = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  static checkNote(noteId) {
    const notes = this.getNotes()
    const noteIndex = notes.findIndex(note => note.id === noteId)
    notes[noteIndex].done? notes[noteIndex].done = false : notes[noteIndex].done = true
    localStorage.setItem('notes', JSON.stringify(notes))
  }
  
}
