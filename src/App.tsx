import React, { useEffect, useRef, useState } from "react";
import Pad from "./components/Pad";
import PadMenu from "./components/PadMenu";
import type { PadType } from "./types/padTypes";
import { getDelay } from "./utils/delays";
import { fixedCombos, getRandomCombo } from "./utils/combos";

type Pad = { id: number; type: PadType };

const App: React.FC = () => {
  const [pads, setPads] = useState<Pad[]>([]);
  const [speed, setSpeed] = useState<"slow" | "normal" | "fast">("normal");
  const idCounter = useRef(0);
  const isRunning = useRef(false);

  const padTypes: PadType[] = [
    "jab",
    "direct",
    "esquiveF",
    "crochetD",
    "crochetG",
    "uppercutD",
    "uppercutG",
    "esquiveBasse",
    "esquiveGauche",
    "esquiveDroite",
  ];

  const launchCombo = async () => {
    if (isRunning.current) return;
    isRunning.current = true;

    const combo =
      Math.random() < 0.2
        ? getRandomCombo(padTypes)
        : fixedCombos[Math.floor(Math.random() * fixedCombos.length)];

    const delay = getDelay(speed);

    combo.forEach((type, index) => {
      setTimeout(() => {
        setPads((prev) => [...prev, { id: idCounter.current++, type }]);
      }, index * delay);
    });

    const totalDuration = combo.length * delay + 1000;
    setTimeout(() => {
      isRunning.current = false;
      launchCombo();
    }, totalDuration);
  };

  useEffect(() => {
    launchCombo();
  }, [speed]);

  const handleAnimationEnd = (id: number) => {
    setPads((prev) => prev.filter((pad) => pad.id !== id));
  };

  return (
    <div
      className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden"
      style={{ perspective: "1000px", perspectiveOrigin: "center top" }}
    >
      <PadMenu speed={speed} onChange={setSpeed} />
      {pads.map((pad, index) => (
        <Pad
          key={pad.id}
          id={pad.id}
          type={pad.type}
          index={index}
          onEnd={handleAnimationEnd}
        />
      ))}
    </div>
  );
};

export default App;
