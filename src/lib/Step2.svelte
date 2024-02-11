<script lang="ts">
import {step} from './stores/store-step'
import { personInfo } from './stores/info';
   import Arcade from "./img/icon-arcade.svg"
   import Pro from "./img/icon-pro.svg"
   import Advanced from "./img/icon-advanced.svg"
import Button from './Button.svelte';
    $:{cardName = $personInfo.name;}
    const cardDate = [
      { name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90, imageUrl: Arcade},
      { name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120, imageUrl: Advanced },
      { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150, imageUrl: Pro}
    ];
  
    let cardName: string;
  
    let active: boolean;
   
   let switcher= { monthly: true };
  
  function switcherUpdate(newswitcher:string){
    personInfo.update((prev) => ({
      ...prev,
      switcher: newswitcher,
    
    }));
  }
  function toggle() {
      switcher.monthly = !switcher.monthly; 
      switcherUpdate(switcher.monthly ? 'monthly' : 'yearly');
    }
    function Card(card: string, monthlyPrice: number, yearlyPrice: number,imageUrl: string) {
    personInfo.update((prev) => ({
      ...prev,
      name: card,
      monthlyPrice: monthlyPrice,
      yearlyPrice: yearlyPrice,
      imageUrl,
    }));
    active = true;
  }
  </script>
  
  <section class="stp step-2">
    <div class="header">
      <h1 class="title">Select your plan</h1>
      <p class="exp">You have the option of monthly or yearly billing.</p>
    </div>
    <form>
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      {#each cardDate as { name, monthlyPrice, yearlyPrice, imageUrl }}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <figure class="radio-button {cardName=== name ? 'active-card' : ''}" on:click={() => Card(name, monthlyPrice, yearlyPrice, imageUrl)}>
          <img src={imageUrl} alt={`Image for ${name}`} />
          <figurecaption class="plan-info chosen">
            <b>{name}</b>
            {#if switcher.monthly}
              <span class="plan-priced">${monthlyPrice}/mo</span>
            {/if}
            {#if !switcher.monthly}
              <span class="plan-priced">${yearlyPrice}/yr</span>
            {/if}
          </figurecaption>
        </figure>
      {/each}
    </form>
  
  
    <div class="switcher">
      <p class={switcher.monthly ? 'active' : 'not_active'}>Monthly</p>
      <label class="switch">
        <input type="checkbox" on:click={toggle}>
        <span class="slider round"></span>
      </label>
      <p class={!switcher.monthly ? 'active' : 'not_active'}>Yearly</p>
    </div>
  
  
    <div class="btns">
         <Button/>
      </div>
    </section>
  
  
    <style>
        
	.radio-button.active {
		@apply border-msf-purplish-blue bg-msf-magnolia;
	}
      .active {
        color: rgb(2, 41, 89);
  
        font-family: Ubuntu, sans-serif;
  
        font-size: 14px;
  
        font-weight: 500;
  
        line-height: 16px;
  
        letter-spacing: 0px;
  
        text-align: right;
      }
  
      .not_active {
        color: rgb(150, 153, 170);
  
        font-family: Ubuntu,sans-serif;
  
        font-size: 14px;
  
        font-weight: 500;
  
        line-height: 16px;
  
        letter-spacing: 0px;
  
        text-align: left;
      }
      .step-2 {
      width: 100%;
      }
  .step-2 form {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 2rem;
  }
  .plan-card {
    border: 2px solid var(--card-border-color);
    border-radius: 7px;
    padding-top:1.25rem;
    padding-left: 1rem;
    padding-bottom: 1.25rem;
    padding-right: 4rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    justify-content: space-between;
  }
  .active-card {
          background-color: var(--sidebar-accent-color);
          border-color: var(--sidebar-accent-color);
          color: var(--primary-color);
      }
  .plan-info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .plan-info b {
    color: var(--primary-color);
    font-family: Ubuntu;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.13rem;
  }
  
  .plan-info span {
    color: var(--secondary-color);
  }
  .switcher {
      margin: 2rem 0;
    }
    .switcher {
      background-color: var(--selected-card-color);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.875rem 0;
      margin-bottom: 2rem;
      justify-content: center;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 24px;
    }
  
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    
  @media screen and (max-width: 765px) {
  .plan-card {
        width: 100%;
        height: 100px;
        flex-direction: row;
        justify-content: flex-start;
        gap: 1rem;
        padding-top:1rem;
    padding-left: 1rem;
    padding-bottom: 1.25rem;
        align-items: center;
      }
      .step-2 form {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
    </style>