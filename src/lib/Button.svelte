<script lang="ts">
import {step} from './stores/store-step'
</script>
<div class="btns">
    <button class="btn" type="button" on:click={()=>step.updateStep("-")}>Go Back</button>
    <button class="btn" type="button" on:click={()=>step.updateStep('+')}>Next Step</button>
  </div>

<style>
.btn{
margin-bottom: 32px;
margin-right: 100px;   

width: 123px;
height: 48px;
border-radius: 8px;
background: rgb(2, 41, 89);
  }
</style>