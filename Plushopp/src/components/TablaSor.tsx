import type { plussType } from "../types/plussType";
import { getCardImage } from "../utils/getCardImage";

interface TablaSorProps {
  adat: plussType;
  onEdit?: (adat: plussType) => void;
  onDelete?: (id: number) => void;
}

export default function TablaSor({ adat, onEdit, onDelete }: TablaSorProps) {
  return (
    <tr>
      <td>{adat.id}</td>
      <td>
        <img
          src={getCardImage(adat)}
          alt={adat.nev}
          width={50}
          height={50}
          style={{ objectFit: "cover" }}
          onError={(e) => {
            e.currentTarget.src = "/images/cards/1.png";
          }}
        />
      </td>
      <td>{adat.nev}</td>
      <td>{adat.szuletes_nap.toLocaleDateString("hu-HU")}</td>
      <td className="ar">{adat.ar} Ft</td>
      <td>
        {onEdit && (
          <button type="button" onClick={() => onEdit(adat)}>
            Szerkesztés
          </button>
        )}
        {onDelete && (
          <button type="button" onClick={() => onDelete(adat.id)}>
            Törlés
          </button>
        )}
      </td>
    </tr>
  );
}
