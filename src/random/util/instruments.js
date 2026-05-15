import { get_random_number } from "../../shared/dice.js";

const INSTRUMENTS = [null, "Bagpipes", "Drum", "Dulcimer", "Flute", "Lute", "Lyre", "Horn", "Pan Flute", "Shawm", "Viola"];

export function randomMusicalInstrument() {
  return INSTRUMENTS[get_random_number(10)];
}
