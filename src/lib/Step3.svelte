<script lang="ts">
	import { step } from './stores/store-step';
import Button from './Button.svelte';

</script>

<div class="form-step">
	<section class="form-content">
		<h1>Pick add-ons</h1>
		<p class="mb-5 text-msf-cool-gray md:mb-8">Add-ons help enchance your gaming experience.</p>
		
			<div>
				<div class="flex items-center gap-5">
					<input
						type="checkbox"
						name='addon'
						id='addon.id'
						
						class="h-5 w-5 cursor-pointer rounded-md border-msf-light-gray bg-msf-light-gray accent-msf-purplish-blue"
					/>
					<label for="online">
						<h2 class="text-lg font-msf-font-medium text-msf-marine-blue">addon.props.name</h2>
						<p class="text-msf-cool-gray">addon.props.desc</p>
					</label>
				</div>
				<p class="text-sm text-msf-purplish-blue">
					
				</p>
			</div>
	
	</section>
	<nav class="form-button-wrapper justify-between">
		<Button/>
	</nav>
</div>

<style>

</style>
