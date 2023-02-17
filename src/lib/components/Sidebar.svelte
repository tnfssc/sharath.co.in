<script lang="ts">
  import Item from "$lib/components/Sidebar/Item.svelte";
  import Icon from "$lib/components/Icon.svelte";

  import type { IconifyIcon } from "@iconify/svelte";
  import { fade, fly } from "svelte/transition";

  export let isOpen = false;
  export let toggleSidebar: () => void;

  export let items: Array<{ href: string; icon: IconifyIcon; text: { content: string; strokeLength: number } }>;
</script>

<ul class="menu w-full bg-base-100 p-4 text-base-content sm:w-96" on:click={toggleSidebar} on:keydown={() => {}}>
  {#if isOpen}
    {#each items as item, i}
      <li>
        <a href={item.href}>
          <span in:fade={{ delay: i * 300, duration: 300 }} class="text-white"><Icon icon={item.icon} size={12} /></span>
          <Item
            delay={i * 300}
            strokeLength={item.text.strokeLength}
            strokeWidth={2}
            height={76}
            fontSize={64}
            duration={1000}
            text={item.text.content}
          />
        </a>
      </li>
    {/each}
  {/if}
</ul>

<style>
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  a span {
    @apply mt-4;
  }
</style>
