import { PlussType } from "../types/PlussType";

export function getCardImage(adat: PlussType): string {
  const imageIndex = ((adat.id - 1) % 12) + 1;
  return `/${imageIndex}.png`;
}
