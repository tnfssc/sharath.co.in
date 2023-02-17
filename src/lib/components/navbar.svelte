<script lang="ts">
  import Sidebar from "$lib/components/Sidebar.svelte";
  import MenuButton from "./MenuButton.svelte";

  import homeIcon from "@iconify/icons-material-symbols/home";
  import contactIcon from "@iconify/icons-material-symbols/contact-page-rounded";
  import aboutIcon from "@iconify/icons-mdi/information-outline";

  let isSidebarOpen = false;
  let openBtn: HTMLInputElement;
  const toggleSidebar = () => {
    openBtn.click();
  };

  const items = [
    {
      href: "/",
      icon: homeIcon,
      text: {
        content: "home",
        strokeLength: 260,
      },
    },
    {
      href: "/contact",
      icon: contactIcon,
      text: {
        content: "contact",
        strokeLength: 210,
      },
    },
    {
      href: "/about",
      icon: aboutIcon,
      text: {
        content: "about",
        strokeLength: 210,
      },
    },
  ];
</script>

<div class="absolute bottom-6 right-4 z-20">
  <label for="main-navbar" class="drawer-button">
    <MenuButton {isSidebarOpen} />
  </label>
</div>

<div class="drawer drawer-end">
  <input bind:this={openBtn} id="main-navbar" type="checkbox" bind:checked={isSidebarOpen} class="drawer-toggle" />
  <div class="drawer-content flex min-h-screen min-w-min flex-col items-center justify-center">
    <slot />
  </div>
  <div class="drawer-side">
    <label for="main-navbar" class="drawer-overlay" />
    <Sidebar {items} isOpen={isSidebarOpen} {toggleSidebar} />
  </div>
</div>
