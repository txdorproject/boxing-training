import type { PadType } from "../types/padTypes";

export const fixedCombos: PadType[][] = [
["jab", "direct", "crochetG", "crochetD"],
    ["jab", "jab", "direct", "esquiveGauche"],
    ["uppercutD", "uppercutG", "crochetD", "crochetG"],
    ["direct", "crochetD", "esquiveDroite"],
    ["jab", "esquiveBasse", "direct", "crochetG"],
    ["esquiveF", "uppercutG", "uppercutD"],
    ["jab", "jab", "jab", "direct", "crochetD"],
    ["direct", "direct", "esquiveDroite", "crochetG"],
    ["uppercutD", "esquiveGauche", "jab"],
    ["crochetG", "crochetD", "uppercutG", "uppercutD"],
    ["jab", "crochetG", "esquiveF", "uppercutD"],
    ["crochetD", "esquiveDroite", "direct", "direct"],
    ["esquiveBasse", "jab", "crochetD", "uppercutG"],
    ["uppercutD", "direct", "jab", "crochetG"],
    ["esquiveF", "esquiveGauche", "crochetD", "jab"],
    ["crochetG", "jab", "direct", "esquiveDroite"],
    ["jab", "esquiveF", "uppercutG", "direct"],
    ["uppercutD", "crochetG", "esquiveBasse"],
    ["esquiveGauche", "esquiveDroite", "direct"],
    ["jab", "direct", "uppercutG", "uppercutD"]
];

export const getRandomCombo = (padTypes: PadType[]): PadType[] => {
  const length = Math.floor(Math.random() * 3) + 3;
  return Array.from({ length }, () =>
    padTypes[Math.floor(Math.random() * padTypes.length)]
  );
};
