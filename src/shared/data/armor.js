export function build_armor_table(dexterityModifier) {
  return {
    lightArmor: {
      padded: {
        armorname: "Padded armor",
        armorAC: 11 + dexterityModifier,
      },
      leather: {
        armorname: "Leather armor",
        armorAC: 11 + dexterityModifier,
      },
      studdedleather: {
        armorname: "Studded leather",
        armorAC: 12 + dexterityModifier,
      },
    },
    mediumArmor: {
      hide: {
        armorname: "Hide armor",
        armorAC: 12 + dexterityModifier,
      },
      chainshirt: {
        armorname: "Chain shirt",
        armorAC: 13 + dexterityModifier,
      },
      scalemail: {
        armorname: "Scale mail",
        armorAC: 14 + dexterityModifier,
      },
      breastplate: {
        armorname: "Breastplate",
        armorAC: 14 + dexterityModifier,
      },
      halfplate: {
        armorname: "Half plate",
        armorAC: 15 + dexterityModifier,
      },
      shield: {
        armorname: "Shield",
        armorAC: 2,
      },
    },
    heavyArmor: {
      ringmail: {
        armorname: "Ring mail",
        armorAC: 14,
      },
      chainmail: {
        armorname: "Chain mail",
        armorAC: 16,
      },
      splint: {
        armorname: "Splint armor",
        armorAC: 17,
      },
      plate: {
        armorname: "Plate armor",
        armorAC: 18,
      },
    },
  };
}
