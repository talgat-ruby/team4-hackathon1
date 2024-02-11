<script lang="ts">
import Button from './Button.svelte';
import {billingstore, updatePlan, updateBilling} from './stores/Store';
export let subscriptionType = '';

let yearsubs = false;

// type Subscription = {
// 	plan: Plan;
// 	billing: 'monthly' | 'yearly';
// };

// function changePlan () {
//   updatePlan('pro', 15)
// }


//примитивно через новую функцию отправляем новые данные
function changePlan () {
  updatePlan('pro', 15)
}

function changePlanAdv () {
  updatePlan('advanced', 12)
}

function changePlanArc () {
  updatePlan('arcade', 9)
}

function changebilling () {
  updateBilling(true)
}

</script>

<div class="step-container">
  
  <h2 class="step-title">Select your plan</h2>
    <p class="step-subtitle">You have the option of mounthly or yearly billing.</p>
    <div class="button-plan">

     
        <label class="radio-btn">
  
          <input type="radio" value="arcade" bind:group={subscriptionType} on:click={changePlanArc} />
          Arcade
          {#if yearsubs}
          <p>2 months free</p>
          {/if}
        </label>
  
        <label class="radio-btn">
          <input type="radio" value="advanced" bind:group={subscriptionType} on:click={changePlanAdv} />
          Advanced
          {#if yearsubs}
          <p>2 months free</p>
          {/if}
        </label>
    
        <label class="radio-btn">
          <input type="radio" value="pro" bind:group={subscriptionType} on:click={changePlan}/>
          Pro
          {#if yearsubs}
          <p>2 months free</p>
          {/if}
        </label>
    
  
        {#if subscriptionType === 'arcade'}
          <p>Arcade 9$.</p>
        {:else if subscriptionType === 'advanced'}
          <p>Advanced 12$.</p>
        {:else if subscriptionType === 'pro'}
          <p>PRO 15$.</p>
        {:else}
          <p>Select subscription type.</p>
        {/if}

        <input type="checkbox" bind:checked={yearsubs} on:click={changebilling} />
        {#if yearsubs}
	      <p>
		    Yearly.
    	  </p>
       {:else}
	      <p>
	      Monthly.
	      </p>
        {/if}

        <!-- <button on:click={changePlan}>Change plan</button> -->

    </div>
    <Button/>
  </div>


<style>

.button-plan {
width: 350px;
height: 200px;
border-radius: 5px;
justify-content:center;
background: rgb(197, 197, 197);

}

.radio-btn{
    margin-top: 5px;
    border: none;
    background: #2196F3;
    width: 30%;
    height: 35%;
    /* padding: 14px 18px; */
    border-radius: 10px;

    cursor: pointer;
    display: inline-block;
}
    




.step-container{
    width: 450px;
    background-color: var(--White);
    border-radius: 20px;
    position: relative;
    margin-right: 100px;
    padding: 50px 30px;
}
.step-title{
color: rgb(2, 41, 89);
font-family: 'Ubuntu';
font-size: 32px;
font-weight: 700;
line-height: 37px;
letter-spacing: 0px;
text-align: left;
}
.step-subtitle{
color: rgb(150, 153, 170);
font-family: 'Ubuntu';
font-size: 16px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0px;
text-align: left;
}



/* add */

/* Стили для toggle switch */

/* .subscription-slider {
  height: 60px;
  width: 200px;
  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
  border-radius: 10px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

/* switch2 

.toggle-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.toggle-container label {
  margin-right: 10px;
  font-weight: normal;
}

.toggle-container input {
  width: 100px;
  height: 20px;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ddd;
  transition: all 0.2s ease-in-out;
  outline: none;

  /* Стилизация слайдера 
  cursor: pointer;
  background: #ccc;
  -webkit-transition: .2s;
  transition: 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: #4caf50;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    background: #4caf50;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
}

.toggle-container input:focus {
  box-shadow: 0 0 0 1px #4caf50;
} */


</style>