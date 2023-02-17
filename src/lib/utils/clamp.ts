export const clamp = (min: number, max: number) => (t: number) => {
  if (t < min) return min;
  if (t > max) return max;
  return t;
};
