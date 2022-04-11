import axios from "axios";
import Global from "../Global";
import Pokemon from "../Model/Pokemon";
// import "@babel/plugin-proposal-class-static-block";
class DataService {
    static url;
    static {
        this.url = Global.appUrl;
    }

    static async getData()
    {
        let data;
        await axios.get(`${this.url}`,{responseType: 'json'})
            .then(res => 
                {
                    data = res.data;
                    return data;
                }
            )
        return data;
    }

    static async getDataUrlParam( url )
    {
        let data;
        await axios.get(url, {responseType: 'json'})
            .then(res => 
                {
                    data = res.data;
                    return data;
                }
            )
        return data;
    }

    static async getPkemonsList(data){
        let pokemon;
        let pokemonList = [];
        console.log(data)
        pokemonList = await Promise.all( data.map(async(el)=>
            {
             return await axios.get(el.url)
                .then(res=>
                    {
                        pokemon = new Pokemon
                        (
                            res.data.id,
                            res.data.forms[0]['name'],
                            res.data.sprites.other['official-artwork']['front_default']
                        );
                        return pokemon
                    }
                )
            }
        ));
        return pokemonList;
    }
}

export default DataService;