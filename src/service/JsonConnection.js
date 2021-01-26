import data from "../data/data.json"


export default class JsonConnection {

    constructor() {
        this.data = data;
    }

    addNote(note, callback) {
        let id = this.getNextId();
        note.id = id;
        data.cards.push(note);
        callback("success")
    }

    getNextId() {
        console.log(data.cards)
        data.cards.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return data.cards[data.cards.length - 1].id + 1
    }

    getAllNotes(callback) {
        callback("done");
        return data.cards;
    }

    getAllTasks(callback) {
        callback("done");
        return data.tasks;
    }


    
}