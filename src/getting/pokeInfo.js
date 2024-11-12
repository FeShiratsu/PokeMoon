
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

export function getDescription(pokeData){
    if(pokeData){
        const descLink = pokeData.species.url;
        const fetcher = url => fetch(url).then(r => r.json())
        const {data,error} = useSWR(descLink,fetcher);
        
        if(data){
            console.log(data);
            return data;
        }else{
            return;
        }
    }else{
        return;
    }
}