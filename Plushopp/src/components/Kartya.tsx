import type { plussType } from "../types/plussType";
import { getCardImage } from "../utils/getCardImage";

interface KartyaProps {
  adat: plussType;
}

export default function Kartya({ adat }: KartyaProps) {
  return(
        <article>
            <div>
            <img
                src={getCardImage(adat)}
                alt={adat.nev}
                onError={(e) => {
                e.currentTarget.src = "/images/cards/1.png";
                }}
            />
            </div>
            <div>
                <h2>
                    {adat.nev}
                </h2>
                <p>
                    {adat.szuletes_nap.toLocaleDateString('hu-HU')}
                </p>
                <p className="ar">
                    {adat.ar}
                </p>
            </div>
            <div>
                <button onClick={()=> {}}> + </button>
            </div>
        </article>
  )
}
