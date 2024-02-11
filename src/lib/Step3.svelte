<script lang="ts">


	import { writable } from 'svelte/store';
	import FormSteps from '../lib/FormSteps.svelte';
	import checkMarkImg from './img/icon-checkmark.svg';
	export let onlineServiceAddOnIsAdded = writable(false);
	export let monthlyIsSelected = writable(true);
	export let largerStoreAddOnIsAdded = writable(false);
	export let customizableProfileAddOnIsAdded = writable(false);
	import '@fontsource/ubuntu/300.css';
	import '@fontsource/ubuntu/400.css';
	import '@fontsource/ubuntu/500.css';
	import '@fontsource/ubuntu/700.css';
	let showComponent = false;
	window.setTimeout(() => {
		showComponent = true;
	}, 0);
</script>

<body>
	<main>
		<FormSteps />
		<form class="AddOns-form" class:show={showComponent}>
			<h3>Pick add-ons</h3>
			<p class="AddOns-description">Add-ons help enhance your gaming experience.</p>
			<div class="AddOns-container">
				<button
					class="AddOns-choice"
					class:selected={$onlineServiceAddOnIsAdded}
					on:click={() => {
						$onlineServiceAddOnIsAdded = !$onlineServiceAddOnIsAdded;
					}}
				>
					<div class="checkBox" class:selected={$onlineServiceAddOnIsAdded}>
						<img src={checkMarkImg} alt="" />
					</div>
					<div class="choice-info">
						<p class="choice-info-1">Online service</p>
						<p class="choice-info-2">Access to multiplayer games</p>
					</div>
					{#if $monthlyIsSelected}
						<p class="price">+$1/mo</p>
					{:else}
						<p class="price">+$10/yr</p>
					{/if}
				</button>
				<button
					class="AddOns-choice"
					class:selected={$largerStoreAddOnIsAdded}
					on:click={() => {
						$largerStoreAddOnIsAdded = !$largerStoreAddOnIsAdded;
					}}
				>
					<div class="checkBox" class:selected={$largerStoreAddOnIsAdded}>
						<img src={checkMarkImg} alt="" />
					</div>
					<div class="choice-info">
						<p class="choice-info-1">Larger storage</p>
						<p class="choice-info-2">Extra 1TB of cloud save</p>
					</div>
					{#if $monthlyIsSelected}
						<p class="price">+$2/mo</p>
					{:else}
						<p class="price">+$20/yr</p>
					{/if}
				</button>
				<button
					class="AddOns-choice"
					class:selected={$customizableProfileAddOnIsAdded}
					on:click={() => {
						$customizableProfileAddOnIsAdded = !$customizableProfileAddOnIsAdded;
					}}
				>
					<div class="checkBox" class:selected={$customizableProfileAddOnIsAdded}>
						<img src={checkMarkImg} alt="" />
					</div>
					<div class="choice-info">
						<p class="choice-info-1">Customizable profile</p>
						<p class="choice-info-2">Custom theme on your profile</p>
					</div>
					{#if $monthlyIsSelected}
						<p class="price">+$2/mo</p>
					{:else}
						<p class="price">+$20/yr</p>
					{/if}
				</button>
			</div>
		</form>
	</main>
</body>

<style>
	body {
		background: rgb(242, 242, 242);
	}

	h3 {
		font-family: 'Ubuntu';
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		color: #022959;
		margin-bottom: 9px;
	}

	.AddOns-description {
		font-size: 16px;
		line-height: 25px;
		color: #9699aa;
		margin-bottom: 22px;
	}

	.AddOns-container {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.AddOns-choice {
		height: 62px;
		background-color: white;
		border: 1px solid #d6d9e6;
		border-radius: 8px;
		cursor: pointer;
		padding-inline: 16px;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.choice-info {
		text-align: left;
	}

	.choice-info-1 {
		font-family: 'Ubuntu';
		font-weight: 700;
		font-size: 14px;
		line-height: 16px;
		color: #022959;
	}

	.choice-info-2 {
		font-family: 'Ubuntu';
		font-size: 12px;
		line-height: 20px;
		color: #9699aa;
	}

	.price {
		font-family: 'Ubuntu';
		font-size: 12px;
		line-height: 20px;
		color: #483eff;
		margin-left: auto;
	}

	@media screen and (min-width: 1440px) {
		main {
			display: flex;
			justify-content: center;
			width: 1050px;
			height: 600px;
			margin-left: 251px;
			margin-top: 105px;
			border-radius: 15px;

			box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);

			background: rgb(255, 255, 255);
		}

		h3 {
			font-size: 32px;
			line-height: 37px;
			margin-bottom: 11px;
		}

		.AddOns-description {
			margin-bottom: 35px;
		}

		.AddOns-choice {
			height: 81px;
			padding-inline: 24px;
			transition: 0.15s;
		}

		.choice-info-1 {
			font-family: 'Ubuntu';
			font-weight: 700;
			font-size: 16px;
			line-height: 18px;
		}

		.choice-info-2 {
			font-family: 'Ubuntu';
			font-size: 14px;
		}

		.price {
			font-family: 'Ubuntu';
			font-size: 14px;
		}
	}

	.AddOns-form {
		width: 450px;
		background-color: var(--White);
		border-radius: 20px;
		position: relative;
		margin-left: 100px;
		margin-right: 100px;
		padding: 50px 30px;
	}

</style>
