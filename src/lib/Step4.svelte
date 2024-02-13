<script>
	import { writable } from 'svelte/store';
	export let onlineServiceAddOnIsAdded = writable(false);
	export let monthlyIsSelected = writable(true);
	export let largerStoreAddOnIsAdded = writable(false);
	export let customizableProfileAddOnIsAdded = writable(false);
	export let currentStep = writable(1);
	export let planSelection = writable('arcade');
	import { personInfo, step } from './stores/store-step';
	import { selectedServices } from "./stores/Plan-store";
	import { goto } from "$app/navigation";


	function handleConfirmClick() {
    // Отправка данных на сервер
    sendDataToServer().then(() => {
      // После успешной отправки данных переходим на страницу Confirm
      goto('/Confirm');
    }).catch(error => {
      console.error('Ошибка при отправке данных:', error);
      // Обработка ошибок, если не удалось отправить данные
    });
  }

  async function sendDataToServer() {
    try {
      // Ваш код для отправки данных на сервер
      const response = await fetch('http://localhost:8081/api/v1/forms', {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса: ' + response.statusText);
      }
    } catch (error) {
      throw new Error('Ошибка при отправке данных на сервер: ' + error.message);
    }
  }

  function handleSendDataClick() {
    sendDataToServer();
  }

	const goToNextStep = () => {
		step.updateStep('+');
	};

	const goBack = () => {
		step.updateStep('-');
	};

	let planPrice = 0;
	let addOnPrice = 0;
	let totalPrice = 0;

	// PLAN
	if ($planSelection === 'arcade') {
		planPrice = 9;
	} else if ($planSelection === 'advanced') {
		planPrice = 12;
	} else if ($planSelection === 'pro') {
		planPrice = 15;
	}

	// ADD ONS
	if ($onlineServiceAddOnIsAdded) {
		addOnPrice += 1;
	}

	if ($largerStoreAddOnIsAdded) {
		addOnPrice += 2;
	}

	if ($customizableProfileAddOnIsAdded) {
		addOnPrice += 2;
	}

	if (!$monthlyIsSelected) {
		planPrice = planPrice * 10;
		addOnPrice = addOnPrice * 10;
	}

	totalPrice = planPrice + addOnPrice;

	let showComponent = false;
	window.setTimeout(() => {
		showComponent = true;
	}, 0);
</script>

<main>
	<form class:show={showComponent}>
		<h3>Finishing up</h3>
		<p class="FinishingUp-description">Double-check everything looks OK before confirming.</p>
		<div class="subscription">
			<div class="chosenPlan">
				<div>
					<p>
						{$planSelection}
						{#if $monthlyIsSelected}(Monthly){:else}(Yearly){/if}
					</p>
					<button
						on:click={() => {
							$currentStep = 2;
						}}>Change</button
					>
				</div>
				<strong
					>${planPrice}/{#if $monthlyIsSelected}mo{:else}yr{/if}</strong
				>
			</div>
			<div class="line"></div>
			{#if $onlineServiceAddOnIsAdded}
				<div class="chosenAddOns">
					<p>Online Service</p>
					{#if $monthlyIsSelected}<p>+$1/mo</p>{:else}<p>+$10/yr</p>{/if}
				</div>
			{/if}
			{#if $largerStoreAddOnIsAdded}
				<div class="chosenAddOns">
					<p>Larger Storage</p>
					{#if $monthlyIsSelected}<p>+$2/mo</p>{:else}<p>+$20/yr</p>{/if}
				</div>
			{/if}
			{#if $customizableProfileAddOnIsAdded}
				<div class="chosenAddOns">
					<p>Customizable Profile</p>
					{#if $monthlyIsSelected}<p>+$2/mo</p>{:else}<p>+$20/yr</p>{/if}
				</div>
			{/if}
		</div>
		<div class="totalContainer">
			<p>
				Total {#if $monthlyIsSelected}(per month){:else}(per year){/if}
			</p>
			<p class="totalPrice">
				${totalPrice}/{#if $monthlyIsSelected}mo{:else}yr{/if}
			</p>
		</div>
		<div class="navigation-buttons">
			<button type="button" class="go-back" on:click={goBack}>Go Back</button>
			<button type="button" class="next-step" on:click={handleSendDataClick}>Confirm</button>
		</div>
	</form>
</main>

<style>
	form {
		transition: 0.3s;
		position: relative;
		right: -10rem;
		opacity: 0;
	}
	.show {
		opacity: 1;
		right: 0;
	}

	h3 {
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		color: #022959;
		margin-bottom: 9px;
	}

	.FinishingUp-description {
		font-size: 16px;
		line-height: 25px;
		color: #9699aa;
		margin-bottom: 22px;
	}

	.subscription {
		background-color: #f8f9ff;
		border-radius: 8px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.chosenPlan {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		color: #022959;
	}

	.chosenPlan p {
		font-weight: 500;
		line-height: 16px;
		text-transform: capitalize;
	}

	.chosenPlan button {
		font-size: 14px;
		line-height: 20px;
		text-decoration-line: underline;
		color: #9699aa;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	.chosenPlan strong {
		font-weight: 700;
		line-height: 20px;
	}

	.line {
		height: 1px;
		background-color: #9699aa;
		mix-blend-mode: normal;
		opacity: 0.2;
	}

	.chosenAddOns {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		line-height: 20px;
	}

	.chosenAddOns p:first-child {
		color: #9699aa;
	}

	.chosenAddOns p:nth-child(2) {
		color: #022959;
	}

	.totalContainer {
		display: flex;
		justify-content: space-between;
		padding-top: 24px;
		padding-inline: 16px;
	}

	.totalContainer p:first-child {
		font-size: 14px;
		line-height: 20px;
		color: #9699aa;
	}

	.totalPrice {
		font-weight: 700;
		font-size: 16px;
		line-height: 20px;
		color: #483eff;
	}

	@media screen and (min-width: 1440px) {
		h3 {
			font-family: Ubuntu;
			font-weight: 700;
			font-size: 32px;
			line-height: 37px;
			margin-bottom: 11px;
		}

		.FinishingUp-description {
			margin-bottom: 35px;
			font-family: Ubuntu;
		}

		.subscription {
			gap: 16px;
			padding: 16px 24px 24px 24px;
		}

		.chosenPlan {
			font-family: Ubuntu;
			font-size: 16px;
		}

		.chosenPlan p {
			font-family: Ubuntu;
			line-height: 18px;
		}

		.chosenPlan button {
			transition: 0.15s;
		}

		.chosenPlan button:hover {
			color: #483eff;
		}

		.totalContainer {
			padding-inline: 24px;
		}

		.totalPrice {
			font-family: Ubuntu;
			font-size: 20px;
		}

		.navigation-buttons {
			display: flex;
			justify-content: space-between; /* Равномерное распределение элементов */
			margin-top: 20px;
			margin-bottom: 20px; /* Добавленный отступ снизу */
		}

		.next-step {
			color: rgb(255, 255, 255);
			font-family: 'Ubuntu';
			font-size: 16px;
			font-weight: 500;
			line-height: 18px;
			letter-spacing: 0px;
			width: 123px;
			height: 48px;
			border-radius: 8px;
			background: rgb(2, 41, 89);
			cursor: pointer;
		}

		.go-back {
			color: rgb(150, 153, 170);
			font-family: 'Ubuntu';
			font-size: 16px;
			font-weight: 500;
			line-height: 18px;
			letter-spacing: 0px;
			text-align: left;
			cursor: pointer;
			border: none; /* Удаление обводки */
		}
	}
</style>
