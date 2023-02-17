<script lang="ts">
  import { stroke } from "$lib/transitions/stroke";
  import { fade, fly } from "svelte/transition";

  export let text: string;
  export let duration = 1000;
  export let height = 28;
  export let width = 270;
  export let strokeWidth = 2;
  export let strokeColor = "white";
  export let fontSize = 24;
  export let strokeLength = 100;
  export let delay = 0;
</script>

<span in:fly={{ x: 200, delay }}>
  <span class="absolute">
    <svg {width} {height} class="-mt-9">
      <g out:fade>
        <text
          in:stroke={{ duration, strokeLength, delay }}
          fill="none"
          y={fontSize}
          stroke={strokeColor}
          stroke-width={strokeWidth}
          font-size={fontSize}
        >
          {text}
        </text>
      </g>
    </svg>
  </span>
  <span class="absolute">
    <svg in:fade={{ delay: delay + 600 }} {width} {height} class="-mt-9">
      <text fill="white" y={fontSize} stroke="none" font-size={fontSize}>
        {text}
      </text>
    </svg>
  </span>
</span>
