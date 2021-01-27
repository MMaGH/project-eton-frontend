import data from "../data/data.json"


export default class JsonConnection {

    constructor() {
        this.data = data;
    }

    addNote(note, callback) {
        let id = this.getNextId();
        note.id = id;
        this.data.cards.push(note);
        callback("success")
    }

    getNextId() {
        this.data.cards.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return this.data.cards[data.cards.length - 1].id + 1
    }

    getAllNotes(callback) {
        callback("done");
        return this.data.cards;
    }

    getAllTasks(callback) {
        callback("done");
        return this.data.tasks;
    }

    updateNoteById(id, note, callback) {
        let index = this.data.cards.findIndex((item) => item.id === note.id);
        this.data.cards[index] = note;
        callback("success");
    }


    
}