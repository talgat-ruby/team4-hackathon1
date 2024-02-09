<script lang="ts">
import {step} from './stores/store-step'
</script>
<div class="btns">
    <button  type="button" on:click={()=>step.updateStep("-")}>Go Back</button>
    <button  type="button" on:click={()=>step.updateStep('+')}>Next Step</button>
  </div>