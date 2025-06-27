import React from "react";
import type { PadType } from "../types/padTypes";
import { padImageMap, padPositionMap, padSizeMap } from "../types/padTypes";

type PadProps = {
  id: number;
  type: PadType;
  index: number;
  onEnd: (id: number) => void;
};

const Pad: React.FC<PadProps> = ({ id, type, index, onEnd }) => {
  const position = padPositionMap[type];
  const size = padSizeMap[type];
  const zIndex = 1000 - index;
  const brightness = 0.8 + index * 0.05;
  const rotateY = (index % 2 === 0 ? 1 : -1) * 3;

  return (
    <div
      className="absolute animate-approachAngle flex items-center justify-center"
      style={{
        width: size.width,
        height: size.height,
        top: position.top,
        left: position.left,
        transformStyle: "preserve-3d",
        transform: `translate(-50%, -50%) rotateX(15deg) rotateY(${rotateY}deg)`,
        zIndex,
        filter: `brightness(${Math.min(brightness, 1)})`,
      }}
      onAnimationEnd={() => onEnd(id)}
    >
      <img
        src={padImageMap[type]}
        alt={type}
        className="w-full h-full object-contain pointer-events-none"
        draggable={false}
      />
    </div>
  );
};

export default Pad;
