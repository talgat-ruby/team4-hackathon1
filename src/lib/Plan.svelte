<script lang="ts">
  import Button from './Button.svelte';
  import { createPlanStore, plans , subscription } from "./stores/Plan-store";
 
  // export let subscriptionType = '';
  //  export let yearsubs = false;
  
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
    subscription.changeBilling()
  }
  
  function Test () {
  console.log("text ex", $subscription);
}

</script>
  
  <div>
    
    <h2 class="step-title">Select your plan</h2>
      <p class="step-subtitle">You have the option of mounthly or yearly billing.</p>
      <div class="button-plan">
        {#each plans as plan (plan.id)}
				<button class={$subscription.plan.id === plan.id ? 'active radio-button' : 'radio-button'}
					on:click={() => subscription.changePlan(plan)}>
					<img src={`/imgs/icon-${plan.id}.svg`} alt={`${plan.id} plan`} />
					<div>
						<p>{plan.name}</p>		
              {#if $subscription.billing === 'yearly'}
              <p> $ {plan.yearlyPrice} /yr</p>
              <p>2 months free</p>
              {:else}
              <p>$ {plan.monthlyPrice} /yr</p>
						  {/if}
					</div>
				</button>
			{/each}

      </div>
      <div class="checkbox-div">
        <input type="checkbox" checked={$subscription.billing === 'yearly'}
        on:change={() =>
          subscription.changeBilling($subscription.billing === 'yearly' ? 'monthly' :  'yearly')} />
        {#if $subscription.billing === 'yearly' }
        <p>
          Yearly.
        </p>
       {:else}
        <p>
          Monthly.
        </p>
        {/if}
      </div>
      <p>Show selected console.log </p><input type="checkbox" on:click={Test}> 
      <br><Button />
    </div>
  
       <!-- {#each plans as plan}
       <button
       class={$subscription.plan.id === plan.id ? 'active radio-button' : 'radio-button'}
       on:click={() => subscription.changePlan(plan)}
     >
       
          <label class="radio-btn">
            <img src={`/imgs/icon-${plan.id}.svg`} alt={`${plan.id}`}>
            <input type="radio" value="arcade" bind:group={subscriptionType} on:click={changePlanArc} />
            <p class="step-2-bold">{plan.id}</p>
            {#if yearsubs===false}
            <p class="step-2-price" >{plan.monthlyPrice}</p>
            {:else}
            <p class="step-2-price" >{plan.yearlyPrice}</p>
            <p>2 months free</p>
            {/if}
            
          </label>
        </button> -->
          <!-- <label class="radio-btn">
            <img src={Advanced} alt="advanced">
            <input type="radio" value="advanced" bind:group={subscriptionType} on:click={changePlanAdv} />
            <p class="step-2-bold">Advanced</p>
            {#if yearsubs ===false}
            <p class="step-2-price" >Arcade 12$.</p>
            {:else}
            <p class="step-2-price" >Arcade 120$.</p>
            <p>2 months free</p>
            {/if}
          </label>
      
          <label class="radio-btn">
            <img src={Pro} alt="pro">
            <input type="radio" value="pro" bind:group={subscriptionType} on:click={changePlan}/>
            <p class="step-2-bold">Pro</p>
            {#if yearsubs ===false}
            <p class="step-2-price" >Pro 15$.</p>
            {:else}
            <p class="step-2-price" >Pro 150$.</p>
            <p>2 months free</p>
            {/if}
          </label> -->
          <!-- {/each} -->
          <!-- {#if subscriptionType === 'arcade'}
            <p class="step-2-price" >Arcade 9$.</p>
          {:else if subscriptionType === 'advanced'}
            <p class="step-2-price" >Advanced 12$.</p>
          {:else if subscriptionType === 'pro'}
            <p class="step-2-price" >PRO 15$.</p>
          {:else}
            <p>Select subscription type.</p>
          {/if} -->
  
  <style>
  .radio-button {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 3px;
    border: 1px solid #b3b3b3; 
    border-radius: 0.375rem; 
    padding: 0.75rem; 
}

.radio-button:hover {
    border-color: #6610f2; 
}

@media (min-width: 48em) {
    .radio-button {
        width: 33.333333%; 
        flex-direction: column; 
        align-items: flex-start; 
        gap: 1.25rem; 
        padding-right: 2.5rem; 
    }
}

.radio-button.active {
    border-color: #6610f2; 
    background-color: #f8f8f8; 
}

  .button-plan {
  /* width: 450px; */
  /* height: 160px; */
  display: flex;
  justify-content:space-between;
  background: rgb(248, 248, 248);
  }
  

  
  .checkbox-div {
    /* Rectangle */
  margin-top: 5px;
  width: 450px;
  height: 48px;
  left: 640px;
  right: -640px;
  top: 461px;
  bottom: -461px;
  border-radius: 8px;
  background: rgb(248, 249, 255);
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
 

  
  
  </style>