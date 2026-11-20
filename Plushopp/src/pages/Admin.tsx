import { Link } from "react-router";
import Tabla from "../components/Tabla";

function Admin() {
  return (
    <section>
      <h2>Admin felület</h2>
      <Tabla />
      <Link to="uj-termek">Új termék felvétele</Link>
    </section>
  );
}

export default Admin;
