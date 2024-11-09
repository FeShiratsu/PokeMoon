import { getPokemon } from "@/getting/pokeInfo";
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [number, setNumber] = useState(1);
  let typeSpace;
  let data;
  data = getPokemon(number);
  if (!data) {
    return <li>Loading..</li>
  } else {
    console.log(data.types);
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
    <main className={styles.background}>
      <div id="pokedex">
        <div id="screen">
          <img src={data.sprites.front_default} />
        </div>
        
        <div id="pokeInfo">
          <p id="pokeName">Pokemon name: {data.name}</p>
          <h2 id="typeTitle">Type</h2>
          <div id="types">
            {typeSpace}
          </div>
          <div id="buttons">
            <p id="previous" onClick={()=>{setNumber(number-1)}}>Previous</p>
            <p id="next" onClick={()=>{setNumber(number+1)}}>Next</p>
          </div>
        </div>


      </div>
    </main>
  );
}

