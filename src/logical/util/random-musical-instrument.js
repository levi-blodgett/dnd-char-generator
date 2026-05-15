export function random_musical_instrument() {
  const r = Math.floor(Math.random() * 10);
  if (r === 0) return "Bagpipes";
  if (r === 1) return "Drum";
  if (r === 2) return "Dulcimer";
  if (r === 3) return "Flute";
  if (r === 4) return "Lute";
  if (r === 5) return "Lyre";
  if (r === 6) return "Horn";
  if (r === 7) return "Pan Flute";
  if (r === 8) return "Shawm";
  return "Viola";
}
