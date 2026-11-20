import { Link, useParams } from "react-router";

function AdottTermek(){
  const { id } = useParams();

  return (
    <section>
      <h2>Termék részletei</h2>
      <p>A termék azonosítója: {id}</p>
      <Link to="/">Vissza a termékekhez</Link>
    </section>
  );
}

export default AdottTermek;