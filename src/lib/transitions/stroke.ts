import { circInOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export interface StrokeParams {
  delay?: number;
  duration?: number;
  strokeLength?: number;
}

export const DefaultStrokeParams: StrokeParams = {
  delay: 100,
  duration: 1000,
  strokeLength: 100,
};

export const stroke = (
  _: SVGTextElement,
  { delay = 100, duration = 1000, strokeLength = 100 }: StrokeParams = DefaultStrokeParams,
): TransitionConfig => {
  return {
    delay,
    duration,
    css: (t: number) => `
      stroke-dashoffset: ${circInOut(1 - t) * strokeLength};
      stroke-dasharray: ${strokeLength};
    `,
  };
};
