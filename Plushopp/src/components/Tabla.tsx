import { usePlussContext } from "../contexts/PlussContext";
import type { plussType } from "../types/plussType";
import TablaSor from "./TablaSor";

export default function Tabla() {
  const { plussList, load, error } = usePlussContext();

  const handleEdit = (adat: plussType) => {
    console.log("Szerkesztés:", adat);
  };

  const handleDelete = (id: number) => {
    console.log("Törlés ID:", id);
  };

  if (load) {
    return <p>Termékek betöltése...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Kép</th>
          <th>Név</th>
          <th>Születésnap</th>
          <th>Ár</th>
          <th>Műveletek</th>
        </tr>
      </thead>
      <tbody>
        {plussList.map((adat) => (
          <TablaSor
            key={adat.id}
            adat={adat}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
