import data from "../data/data.json"


export default class JsonConnection {

    addNote(note) {
        let id = this.getNextId();
        note.id = id;
        let object = this.openFile();
        object.cards.push(note);
        this.saveFile(object);
    }

    getNextId() {
        console.log(data.cards)
        data.cards.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return data.cards[data.cards.length - 1].id + 1
    }

    openFile() {
        return data;
    }

    saveFile(obj) {
        let fs = require('fs');
        fs.writeFile("../data/data.json", obj, 'utf8', () => console.log("success"));
    }

    
}