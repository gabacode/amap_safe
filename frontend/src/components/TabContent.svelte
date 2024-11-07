<script lang="ts">
  import type { Underpass } from "../types";
  export let selectedTab: Underpass | null = null;
</script>

{#if selectedTab}
  <div>
    <h2>{selectedTab.nome_sottopasso}</h2>
    <img src={selectedTab.immagine_ios} alt={selectedTab.nome_sottopasso} />

    <p><strong>Allarme:</strong> {selectedTab.testo_allarme}</p>
    <p><strong>Livello Allarme:</strong> {selectedTab.livello_allarme}</p>

    <p>
      <strong>{selectedTab.nome_s1}:</strong>
      {selectedTab.valore_s1}
      {selectedTab.unita_misura_s} - Livello: {selectedTab.livello_s1} (Stato: {selectedTab.stato_s1})
    </p>
    <p><strong>Data S1:</strong> {selectedTab.data_s1}</p>

    <p>
      <strong>{selectedTab.nome_s2}:</strong>
      {selectedTab.valore_s2}
      {selectedTab.unita_misura_s} - Livello: {selectedTab.livello_s2} (Stato: {selectedTab.stato_s2})
    </p>
    <p><strong>Data S2:</strong> {selectedTab.data_s2}</p>

    {#if selectedTab.nome_s3}
      <p>
        <strong>{selectedTab.nome_s3}:</strong>
        {selectedTab.valore_s3}
        {selectedTab.unita_misura_s} - Livello: {selectedTab.livello_s3} (Stato:
        {selectedTab.stato_s3})
      </p>
      <p><strong>Data S3:</strong> {selectedTab.data_s3}</p>
    {/if}

    <p>
      <strong>{selectedTab.nome_pl}:</strong>
      {selectedTab.valore_pl}
      {selectedTab.unita_misura_pl} - Livello: {selectedTab.livello_pl} (Stato: {selectedTab.stato_pl})
    </p>
    <p><strong>Data Pluviometro:</strong> {selectedTab.data_pl}</p>

    <p><strong>Planimetria:</strong></p>
    <img
      src={selectedTab.planimetria}
      alt="Planimetria"
      style="width: 300px;"
    />
  </div>
{/if}
