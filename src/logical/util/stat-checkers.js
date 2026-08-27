export function stat_checker(stat, id) {
  if (stat <= 0) {
    document.getElementById(id).value = stat;
  } else {
    document.getElementById(id).value = "+" + stat;
  }
}

export function stat_checker_2(stat, id, dieType) {
  if (stat < 0) {
    document.getElementById(id).value = dieType + stat;
  } else if (stat === 0) {
    document.getElementById(id).value = dieType;
  } else if (stat > 0) {
    document.getElementById(id).value = dieType + "+" + stat;
  }
}

export function stat_checker_3(stat, id, dieType, damagetype) {
  if (stat < 0) {
    document.getElementById(id).value = dieType + stat + " " + damagetype;
  } else if (stat === 0) {
    document.getElementById(id).value = dieType + " " + damagetype;
  } else if (stat > 0) {
    document.getElementById(id).value = dieType + "+" + stat + " " + damagetype;
  }
}

export function stat_checker_no_id(stat) {
  if (stat <= 0) {
    return stat;
  } else {
    return "+" + stat;
  }
}
