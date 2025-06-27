import React from "react";

type Props = {
  speed: "slow" | "normal" | "fast";
  onChange: (s: "slow" | "normal" | "fast") => void;
};

const PadMenu: React.FC<Props> = ({ speed, onChange }) => {
  return (
    <div className="fixed bg-white text-black rounded-lg p-4 shadow-lg z-[9999] menu">
      <h2 className="text-sm font-bold mb-2">Vitesse</h2>
      <select
        value={speed}
        onChange={(e) => onChange(e.target.value as "slow" | "normal" | "fast")}
        className="text-sm border border-gray-300 rounded px-2 py-1"
      >
        <option value="slow">Lent</option>
        <option value="normal">Normal</option>
        <option value="fast">Rapide</option>
      </select>
    </div>
  );
};

export default PadMenu;
