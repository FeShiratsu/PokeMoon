import { getPokemon } from "@/getting/pokeInfo";
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'
import pic from '../../public/cam.png'
export default function Home() {
  const [number, setNumber] = useState(1);
  let typeSpace;
  let pokeName;
  let pokeImg;
  let data;
  let mainType = "normal";
  let cry;
  let pokenumber;
  let region;
  data = getPokemon(number);
  if (!data) {
    typeSpace =
      <>
        <p className={"none"}>{"Load"}</p>

      </>
  } else {

    pokeName = data.name;
    pokenumber = data.order;
    region =
      console.log("cry: " + data.cries.latest);
    cry = new Audio(data.cries.latest);
    cry.volume = 0.08;
    cry.pause();
    cry.play();
    pokeImg = <img src={data.sprites.front_default} />
    if (data.types.length == 1) {
      const type1 = data.types[0].type.name;
      mainType = type1;
      typeSpace = <p className={type1}>{type1}</p>
    } else {

      const type1 = data.types[0].type.name;
      const type2 = data.types[1].type.name;
      mainType = type1;
      typeSpace =
        <>
          <p className={type1}>{type1}</p>
          <p className={type2}>{type2}</p>
        </>
    }
  }
  return (
    <main className={"background"}>
      <div id="entireDex">
        <div id="pokedex">
          <div id="cameraBorder"><div id="camera"></div></div>
          <div className={mainType+" "+"screen"}>
            <p>Number: {pokenumber} {pokenumber}</p>
            {pokeImg}
          </div>
          <div id="pokeInfo">
            <p id="pokeName">Pokemon name: {pokeName}</p>
            <h2 id="typeTitle">Type</h2>
            <div id="types">
              {typeSpace}
            </div>
          </div>
          <div id="buttons">
            <p id="previous" onClick={() => { setNumber(number - 1) }}>Previous</p>
            <p id="next" onClick={() => { setNumber(number + 1) }}>Next</p>
          </div>
        </div>


        <div id="pokeDetails">
           <div className={mainType+" "+"screen"} id="" >
              <p>Lorem Ipsum is simply dummy text of the printing and.</p>
           </div>
        </div>
      </div>


    </main>
  );
}

