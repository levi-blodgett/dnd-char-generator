export function random_artisan_tool() {
  const tools = [
    "Alchemist's supplies", "Brewer's supplies", "Calligrapher's supplies",
    "Carpenter's tools", "Cartographer's tools", "Cobbler's tools",
    "Cook's utensils", "Glassblower's tools", "Jeweler's tools",
    "Leatherworker's tools", "Mason's tools", "Painter's supplies",
    "Potter's tools", "Smith's tools", "Tinker's tools",
    "Weaver's tools", "Woodcarver's tools",
  ];
  return tools[Math.floor(Math.random() * 17)];
}
