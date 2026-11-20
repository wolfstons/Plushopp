import { Link } from "react-router";

function Admin() {
  return (
    <section>
      <h2>Admin felület</h2>
      <p>Itt kezelhetjük a termékeket.</p>
      <Link to="uj-termek">Új termék felvétele</Link>
    </section>
  );
}

export default Admin;