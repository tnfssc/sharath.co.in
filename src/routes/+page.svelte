<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  import arrowDown from "@iconify/icons-mdi/arrow-down";

  const handleClickScroll = (querySelector: string) => () => {
    document.querySelector(querySelector).scrollIntoView({ behavior: "smooth" });
  };
</script>

<main class="scroller">
  <section id="hi" class="bg-gradient-to-bl from-teal-900 to-teal-700">
    <div class="text-8xl">Hi</div>
    <div class="mountOnIntersect">
      <a href="#whoiam" on:click|preventDefault={handleClickScroll("#whoiam")}>
        <span class="flex flex-col items-center">
          <span class="pb-2 text-sm">scroll down</span>
          <Icon icon={arrowDown} size={16} />
        </span>
      </a>
    </div>
  </section>
  <section id="whoiam" class="bg-gradient-to-bl from-yellow-900 to-yellow-700">
    <span class="text-4xl">I am Sharath 🤓</span>
  </section>
  <section id="whatiam" class="bg-gradient-to-bl from-blue-900 to-blue-700">
    <span class="flex flex-col items-center">
      <span class="p-3 text-4xl">I am a software developer</span>
      <span class="p-3 text-4xl">I craft 💻 software</span>
    </span>
  </section>
  <section id="whatidid" class="bg-gradient-to-bl from-green-900 to-green-700">
    <span class="flex flex-col items-center">
      <span class="p-3 text-4xl">I have built</span>
      <span class="p-3 text-4xl">👨‍💻 web apps</span>
      <span class="p-3 text-4xl">📱 mobile apps</span>
      <span class="p-3 text-4xl">🖥️ desktop apps</span>
      <a class="animate-pulse p-3 text-xl" href="/about/projects">Learn more</a>
    </span>
  </section>
</main>

<style>
  section {
    display: grid;
    place-items: center;
    height: 100vh;
    scroll-snap-align: start;
  }

  main {
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    height: 100vh;
    width: 100vw;
  }
</style>
