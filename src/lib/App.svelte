<script lang="ts">
import { step } from "./stores/store-step";
import Form from './Form.svelte';
import Step3 from "./Step3.svelte";
import Step4 from "./Step4.svelte";
</script>
{#if $step===1}
<Form/>
{:else if $step===2}
<Step3/>
{:else if $step===3}
<Step4/>
{/if}