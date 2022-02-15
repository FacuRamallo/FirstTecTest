import axios from "axios";
import Global from "./Global";

class DataService {
    static url;
    static imgUrl;
    static {
        this.url = Global.appUrl;
        this.imgUrl= Global.imgUrl;
    }

    static async get()
    {
        let data;
        await axios.get(`${this.url}`,{responseType: 'json'})
            .then(res =>{
                console.log(res)
                data = res.data;
                console.log(data)
                return data;
            })
            .catch(err => {
                data = err.message
               return data;
            })
            return data;
    }

    static async getImgSrc(url){
        let imgSrc;
        await axios.get(url)
            .then(res=>{
                console.log(res)
                imgSrc=res.data.sprites.other['official-artwork']['front_default'];
                console.log(imgSrc)
                return imgSrc;
            })
            .catch(err => {
                imgSrc = err.message
               return imgSrc;
            })
            return imgSrc;
    }

    static getIdFromUrl(url){
        let id
        let index= 34;
        id = url.charAt(index);
        return id
    }

}

export default DataService;