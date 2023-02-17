export const rotate180 = (_: HTMLElement, { direction = "cw" }: { direction: "cw" | "acw" } = { direction: "cw" }) => {
  const rotate = direction === "cw" ? 180 : -180;
  return {
    duration: 300,
    css: (t: number) => `transform: rotate(${t * rotate}deg); opacity: ${t}`,
  };
};
