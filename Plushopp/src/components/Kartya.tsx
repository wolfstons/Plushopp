import type { plussType } from "../types/plussType";

interface KartyaProps {
  adat: plussType;
}

export default function Kartya({ adat }: KartyaProps) {
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
        <p>
            {adat.ar}
        </p>
    </div>
  </article>;
}
