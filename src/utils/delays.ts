export const getDelay = (speed: "slow" | "normal" | "fast"): number => {
  switch (speed) {
    case "fast":
      return 100;
    case "slow":
      return 10000;
    default:
      return 500;
  }
};
