export const minmax = (min: number, max: number) => (t: number) => {
  return t * (max - min) + min;
};
