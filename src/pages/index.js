import { getPokemon } from "@/getting/pokeInfo";
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [number, setNumber] = useState(1);
  let typeSpace;
  let pokeName;
  let pokeImg;
  let data;
  data = getPokemon(number);
  if (!data) {
    typeSpace=
    <>
          <p className={"none"}>{"Load"}</p>

    </>
  } else {
    pokeName = data.name;
    pokeImg = <img src={data.sprites.front_default} />
    if (data.types.length == 1) {
      const type1 = data.types[0].type.name;
      typeSpace = <p className={type1}>{type1}</p>
    } else {
      const type1 = data.types[0].type.name;
      const type2 = data.types[1].type.name;
      typeSpace =
        <>
          <p className={type1}>{type1}</p>
          <p className={type2}>{type2}</p>
        </>
    }
  }
  return (
    <main className={"background"}>
      <div id="pokedex">
        <div id="cameraBorder"><div id="camera"></div></div>
        <div id="screen">
          {pokeImg}
        </div>
        
        <div id="pokeInfo">
          <p id="pokeName">Pokemon name: {pokeName}</p>
          <h2 id="typeTitle">Type</h2>
          <div id="types">
            {typeSpace}
          </div>
          
        </div>

        
      </div>
      <div id="buttons">
            <p id="previous" onClick={()=>{setNumber(number-1)}}>Previous</p>
            <p id="next" onClick={()=>{setNumber(number+1)}}>Next</p>
          </div>
    </main>
  );
}

