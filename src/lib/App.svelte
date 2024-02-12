<script lang="ts">
import { step } from "./stores/store-step";
import Form from './Form.svelte';
import Plan from './Plan.svelte';
import Step3 from "./Step3.svelte";
import Step4 from "./Step4.svelte";
import Confirm from "./Confirm.svelte";
</script>
{#if $step===1}
<Form/>
{:else if $step===2}
<Plan/>
{:else if $step===3}
<Step3/>
{:else if $step===4}
<Step4/>
{:else if $step===5}
<Confirm/>
{/if}