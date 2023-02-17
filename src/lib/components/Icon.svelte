<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  export let icon: IconifyIcon;
  export let size: number = 4;
</script>

<Icon {icon} style={`width: ${size / 4}rem; height: ${size / 4}rem`} />
