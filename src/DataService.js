import axios from "axios";
import Global from "./Global";

class DataService {
    static url;
    static {
        this.url = Global.appUrl;
    }

    static async get()
    {
        let data;
        await axios.get(`${this.url}`,{responseType: 'json'})
            .then(res =>{
                data = res.data;
                return data;
            })
            .catch(err => {
                data = err.message
               return data;
            })
            return data;
    }
}

export default DataService;