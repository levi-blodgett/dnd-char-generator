export function random_by_length(array, personalityVariable, id) {
  personalityVariable.push(array[Math.floor(Math.random() * array.length)]);
  document.getElementById(id).value = personalityVariable.join("\r\n");
}
