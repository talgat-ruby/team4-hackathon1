<script lang="ts">
	import App from '$lib/App.svelte';
	import FormSteps from '$lib/FormSteps.svelte';
</script>

<body>
	<main>
		<FormSteps />
		<div class="Stepss"><App /></div>
	</main>
</body>

<style>
	.Stepss{
    width: 450px;
    background-color: var(--White);
    border-radius: 20px;
    position: relative;
    
    margin-right: 100px;
    padding: 50px 30px;
}
	body {
		background: rgb(242, 242, 242);
	}
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

</style>
