import config from "../config/config.json"
import JsonConnection from "../service/JsonConnection"
import ApiConnection from "../service/ApiConnection"


class Datahandler {
    constructor() {
        
        if (config.jsonMode) {
            this.connection = new JsonConnection();
        } else {
            this.connection = new ApiConnection();
        }
    }
    
    
    addNote(note, callback) {
        this.connection.addNote(note, callback);
    }

    getAllNotes(callback) {
        return this.connection.getAllNotes(callback);
    }
    
    
}
let datahandler = new Datahandler();
    
export default function getDatahandler() {
    return datahandler;
}