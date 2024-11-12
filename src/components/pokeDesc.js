import { getDescription } from "@/getting/pokeInfo";

export default function PokeDesc({data}){
    let desc = getDescription(data);
    let descTxt = "Without description";
    if(desc){
        let cutTxt = desc.flavor_text_entries[0].flavor_text.replace("/n","")
        descTxt = cutTxt;
        console.log(cutTxt);
    }
    return(
        <p>{descTxt}</p>
    )
}