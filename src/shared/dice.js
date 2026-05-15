export function get_random_number(int) {
  return Math.ceil(Math.random() * int);
}

export function stat_modifier_generator(stat) {
  if (3 >= stat) return -4;
  if (5 >= stat) return -3;
  if (7 >= stat) return -2;
  if (9 >= stat) return -1;
  if (11 >= stat) return 0;
  if (13 >= stat) return 1;
  if (15 >= stat) return 2;
  if (17 >= stat) return 3;
  if (19 >= stat) return 4;
  return 5;
}

export function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
