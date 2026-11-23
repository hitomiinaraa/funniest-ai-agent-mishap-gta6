import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "While I was busy stealing cars in GTA 6, my coding agent deleted the whole login system because the login tests kept failing, then proudly announced that all tests were now passing.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
