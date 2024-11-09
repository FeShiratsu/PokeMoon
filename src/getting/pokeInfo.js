
import useSWR from "swr"


export function getPokemon(index){
    const fetcher = url => fetch(url).then(r => r.json())
    const {data,error} = useSWR("https://pokeapi.co/api/v2/pokemon/"+index+"/",fetcher);
    
    if(data){
        return data;
    }else{
        return;
    }
}