import { type plussType } from "../types/plussType";

export function getCardImage(adat: plussType): string {
  const imageIndex = ((adat.id - 1) % 12) + 1;
  return `/${imageIndex}.png`;
}
