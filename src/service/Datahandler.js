import config from "../config/config.json"
import JsonConnection from "../service/JsonConnection"
import ApiConnection from "../service/ApiConnection"

export default class Datahandler {
    constructor() {
        
        if (config.jsonMode) {
            this.connection = new JsonConnection();
        } else {
            this.connection = new ApiConnection();
        }
    }


    addNote(note) {
        this.connection.addNote(note);
    }
    

}