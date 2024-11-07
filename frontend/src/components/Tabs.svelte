<script lang="ts">
  import type { Underpass } from "../types";

  export let items: Underpass[] = [];
  export let selectedId: string | null = null;
  export let onSelect: (item: Underpass) => void;

  function handleSelect(item: Underpass) {
    onSelect(item);
  }
</script>

<div>
  {#each items as item}
    <button
      on:click={() => handleSelect(item)}
      class:selected={selectedId === item.id}
    >
      {item.nome_sottopasso}
    </button>
  {/each}
</div>
