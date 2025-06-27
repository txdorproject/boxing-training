export type PadType =
  | "jab"
  | "direct"
  | "esquiveF"
  | "crochetD"
  | "crochetG"
  | "uppercutD"
  | "uppercutG"
  | "esquiveBasse"
  | "esquiveGauche"
  | "esquiveDroite";

export const padImageMap: Record<PadType, string> = {
  jab: "/src/media/jab.png",
  direct: "/src/media/direct.png",
  esquiveF: "/src/media/esquive face.png",
  crochetD: "/src/media/crochet droit.png",
  crochetG: "/src/media/crochet gauche.png",
  uppercutD: "/src/media/uppercut droit.png",
  uppercutG: "/src/media/uppercut gauche.png",
  esquiveBasse: "/src/media/esquive basse.png",
  esquiveGauche: "/src/media/esquive gauche.png",
  esquiveDroite: "/src/media/esquive droite.png",
};

export const padPositionMap: Record<PadType, { top: string; left: string }> = {
  jab: { top: "50%", left: "54%" },
  direct: { top: "50%", left: "46%" },
  esquiveF: { top: "50%", left: "50%" },
  crochetD: { top: "50%", left: "46%" },
  crochetG: { top: "50%", left: "54%" },
  uppercutD: { top: "50%", left: "46%" },
  uppercutG: { top: "50%", left: "54%" },
  esquiveBasse: { top: "50%", left: "50%" },
  esquiveGauche: { top: "50%", left: "50%" },
  esquiveDroite: { top: "50%", left: "50%" },
};

export const padSizeMap: Record<PadType, { width: number; height: number }> = {
  jab: { width: 170, height: 170 },
  direct: { width: 170, height: 170 },
  esquiveF: { width: 130, height: 130 },
  crochetD: { width: 130, height: 130 },
  crochetG: { width: 130, height: 130 },
  uppercutD: { width: 130, height: 130 },
  uppercutG: { width: 130, height: 130 },
  esquiveBasse: { width: 300, height: 300 },
  esquiveGauche: { width: 250, height: 250 },
  esquiveDroite: { width: 250, height: 250 },
};
