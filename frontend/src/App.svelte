<script lang="ts">
  import { onMount } from "svelte";
  import Tabs from "./components/Tabs.svelte";
  import TabContent from "./components/TabContent.svelte";
  import type { Underpass } from "./types";

  let data: Underpass[] = [];
  let selectedTab: Underpass | null = null;
  let error: string | null = null;

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:4000/proxy");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      data = await response.json();
      if (data.length > 0) {
        selectedTab = data[0];
      }
    } catch (err: any) {
      error = err.message;
    }
  });

  const handleTabSelect = (item: Underpass) => {
    selectedTab = item;
  };
</script>

<main>
  <h1>Sottopassi</h1>
  {#if error}
    <p style="color: red;">Error: {error}</p>
  {:else}
    <Tabs
      items={data}
      selectedId={selectedTab?.id}
      onSelect={handleTabSelect}
    />
    <TabContent {selectedTab} />
  {/if}
</main>
